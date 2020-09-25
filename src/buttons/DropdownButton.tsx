import React, { CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";
import useDropdownMenu from "../hooks/use-dropdown-menu";
import { TriangleIcon } from "../icons/Icons";
import { Menu, MenuItem, MenuItemProps } from "../menu/Menu";
import { Button, ButtonProps } from "./Button";

interface DropdownButtonProps {
  readonly label?: ReactNode;
  readonly children?: ReactNode;
  readonly showArrow?: boolean;
  readonly menuDirection?: "left" | "right";
  readonly style?: CSSProperties;
}

interface MenuWrapperProps {
  readonly menuDirection?: "left" | "right";
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
  position: absolute;
  margin-top: 2px;
  z-index: 10001;

  ${(props) =>
    props.menuDirection === "right"
      ? css`
          right: 0;
        `
      : ""}
`;

export const Wrapper = styled.div`
  position: relative;
  [aria-expanded="false"] + ${MenuWrapper} {
    display: none;
  }
`;

export const ArrowWrapper = styled.div`
  margin-right: -5px;
  &&&& > svg {
    transform: rotate(180deg);
    height: 8px;
  }
`;

export const DropdownButton: React.FC<DropdownButtonProps & ButtonProps> = ({
  size,
  variant,
  label,
  children,
  style,
  showArrow,
  menuDirection,
}) => {
  const childArray = React.Children.toArray(children);
  const menuItemChildren = childArray.filter((child) => {
    return (
      React.isValidElement<MenuItemProps>(child) && child.type === MenuItem
    );
  }) as React.ReactElement[];

  const {
    buttonProps,
    itemProps,
    isOpen,
    setIsOpen,
    moveFocus,
  } = useDropdownMenu(menuItemChildren.length);

  const childrenWithProps = childArray.map((child) => {
    if (
      !React.isValidElement<MenuItemProps>(child) ||
      child.type !== MenuItem
    ) {
      return child;
    }
    const itemIndex = menuItemChildren.indexOf(child);
    return React.cloneElement(child, {
      ...itemProps[itemIndex],
      onClick: (e: any) => {
        setIsOpen(false);
        child.props.onClick?.(e);
      },
      onMouseEnter: (e: any) => {
        moveFocus(itemIndex);
      },
    });
  });

  return (
    <Wrapper>
      <Button size={size} variant={variant} {...buttonProps} style={style}>
        {label}
        {showArrow && (
          <ArrowWrapper>
            <TriangleIcon />
          </ArrowWrapper>
        )}
      </Button>
      {isOpen && (
        <MenuWrapper menuDirection={menuDirection}>
          <Menu role="menu">{childrenWithProps}</Menu>
        </MenuWrapper>
      )}
    </Wrapper>
  );
};

DropdownButton.defaultProps = {
  showArrow: true,
  menuDirection: "left",
};
