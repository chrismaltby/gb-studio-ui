import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
  font-size: 11px;
  line-height: 21px;
  height: 21px;
  margin-top: 2px;
  margin-left: 5px;
  width: calc(100% - 10px);
  border-radius: 4px;

  :active {
    background-color: #eaeaea;
  }

  &[data-selected="true"] {
    background: #ddd;
  }

  :focus {
    outline: 0 !important;
    box-shadow: none !important;
  }
`;
