import styled from "styled-components";

export const Input = styled.input`
  background: ${props => props.theme.colors.input.background};
  color: ${props => props.theme.colors.input.text};
  border: 1px solid ${props => props.theme.colors.input.border};
  font-size: ${props => props.theme.typography.fontSize};
  border-radius: 4px;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;

  :hover {
    background: ${props => props.theme.colors.input.hoverBackground};
  }

  :focus {
    border: 1px solid ${props => props.theme.colors.highlight};
    background: ${props => props.theme.colors.input.activeBackground};
  }
`;
