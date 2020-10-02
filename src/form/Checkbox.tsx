import React, { FC } from "react";
import styled from "styled-components";

export interface CheckboxProps {
  readonly id: string;
  readonly name: string;
  readonly checked?: boolean;
}

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0px;
  position: absolute;
  width: 18px;
  height: 18px;
  opacity: 0;
`;

const StyledCheckbox = styled.div`
  pointer-events: none;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.theme.colors.input.background};
  color: ${props => props.theme.colors.input.text};
  border: 1px solid ${props => props.theme.colors.input.border};
  border-radius: 4px;
  ${HiddenCheckbox}:checked + & {
    background: ${props => props.theme.colors.highlight};
    border: 1px solid ${props => props.theme.colors.highlight};
  }
  ${HiddenCheckbox}:focus + & {
    border: 1px solid ${props => props.theme.colors.highlight};
    box-shadow: 0 0 0px 2px ${props => props.theme.colors.highlight} !important;
    transition: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.71, 2.65);
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  checked,
  ...props
}) => (
  <CheckboxContainer>
    <HiddenCheckbox id={id} name={name} checked={checked} {...props} />
    <StyledCheckbox>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
