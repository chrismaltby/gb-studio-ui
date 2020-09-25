import { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../buttons/Button";

export interface ToolbarProps {
  readonly children?: ReactNode;
}

export const Toolbar = styled.div<ToolbarProps>`
  display: flex;
  height: 37px;
  font-size: 13px;
  flex-shrink: 0;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.toolbar.background} 0%,
    ${props => props.theme.colors.toolbar.gradientBottom} 100%
  );
  color: ${props => props.theme.colors.text};
  border-bottom: 1px solid ${props => props.theme.colors.toolbar.border};
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  user-select: none;
  z-index: 1;
  -webkit-app-region: drag;
  position: relative;
  z-index: 1000;

  & > *:not(:last-child) {
    margin-right: 5px;
  }

  ${Button} {
    -webkit-app-region: no-drag;
    border: 1px solid ${props => props.theme.colors.button.toolbar.border};
    border-top: 1px solid
      ${props => props.theme.colors.button.toolbar.borderTop};
    height: 24px;
    padding: 0px 10px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;