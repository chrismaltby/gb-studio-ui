import React from "react";
import styled from "styled-components";
import { ListItemButton } from "../buttons/ListItemButton";
import { PencilIcon, TriangleIcon } from "../icons/Icons";
import { FlatListItem } from "./FlatList";

export interface CollapsibleRowProps {
  item: FlatListItem;
}

const CollapseButton = styled.span`
  color: #999;
  margin-right: 5px;
  svg {
      width: 8px;
      height: 8px;
      transform: rotate(90deg);
  }
`;

export const CollapsibleRow: React.FC<CollapsibleRowProps> = ({ item }) => {
  return (
    <>
      <CollapseButton><TriangleIcon /></CollapseButton>
      {item.name}
    </>
  );
};
