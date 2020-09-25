import React, { ReactNode } from "react";
import styled from "styled-components";
import { CaretDownIcon, CaretUpIcon } from "../icons/Icons";

interface SplitPaneHeaderProps {
  children: ReactNode;
  collapsed: boolean;
  onToggle?: () => void;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  padding: 0px 10px;
  height: 30px;
  background-color: #fafafa;
  border-bottom: 1px solid #ccc;

  > span {
    flex-grow: 1;
  }

  svg {
    width: 8px;
    fill: #ccc;
  }

  :active {
    background-color: #f0f0f0;
  }
`;

export const SplitPaneHeader: React.FC<SplitPaneHeaderProps> = ({
  children,
  onToggle,
  collapsed,
}) => {
  return (
    <Wrapper onClick={onToggle}>
      <span>{children}</span>
      {collapsed ? <CaretUpIcon /> : <CaretDownIcon />}
    </Wrapper>
  );
};
