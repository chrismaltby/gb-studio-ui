import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "../icons/Icons";

export interface ZoomButtonProps {
  readonly zoom: number;
  readonly onZoomIn?: () => void;
  readonly onZoomOut?: () => void;
  readonly onZoomReset?: () => void;
}

interface ZoomInnerButtonProps {
  readonly pin: "left" | "right";
}

const ZoomButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const ZoomInnerButton = styled.button<ZoomInnerButtonProps>`
  position: absolute;
  top: 4px;
  left: ${(props) => (props.pin === "left" ? "4px" : "auto")};
  right: ${(props) => (props.pin === "right" ? "4px" : "auto")};
  display: block;
  background: ${(props) => props.theme.colors.button.nestedBackground};
  border-radius: 20px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  padding: 0;
  border: 0;

  :active {
    background: ${(props) => props.theme.colors.button.nestedActiveBackground};
  }

  :after {
    content: "";
    position: absolute;
    left: -4px;
    top: -2px;
    display: block;
    width: 24px;
    height: 20px;
    opacity: 0;
  }

  & > svg {
    width: 8px;
    height: 8px;
    fill: ${(props) => props.theme.colors.button.text};
  }
`;

const ZoomLabel = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  border-radius: 4px;
  width: 98px;
  height: 24px;
  flex-shrink: 0;
  white-space: nowrap;
  box-sizing: border-box;
  font-weight: normal;
  border-width: 1px;
  overflow: hidden;

  -webkit-app-region: no-drag;
  background: linear-gradient(
    to bottom,
    ${(props) => {
      console.log({ props });
      return props.theme.colors.button.background;
    }}
      0%,
    ${(props) => props.theme.colors.button.gradientBottom} 100%
  );
  border: 1px solid ${(props) => props.theme.colors.button.toolbar.border};
  border-top: 1px solid
    ${(props) => props.theme.colors.button.toolbar.borderTop};
  box-shadow: 0px 1px var(--toolbar-button-shadow-color);
  color: ${(props) => props.theme.colors.button.text};
  padding: 0px 5px;

  :active {
    background: ${(props) => props.theme.colors.button.activeBackground};
  }
`;

export const ZoomButton: React.FC<ZoomButtonProps> = ({
  zoom,
  onZoomIn,
  onZoomOut,
  onZoomReset,
}) => (
  <ZoomButtonWrapper onClick={onZoomReset}>
    <ZoomInnerButton
      pin="left"
      onClick={(event) => {
        event.stopPropagation();
        onZoomOut?.();
      }}
    >
      <MinusIcon />
    </ZoomInnerButton>
    <ZoomLabel>{zoom}%</ZoomLabel>
    <ZoomInnerButton
      pin="right"
      onClick={(event) => {
        event.stopPropagation();
        onZoomIn?.();
      }}
    >
      <PlusIcon />
    </ZoomInnerButton>
  </ZoomButtonWrapper>
);

ZoomButton.defaultProps = {
  zoom: 100
};
