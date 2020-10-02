import styled from "styled-components";
import WindowedSelect from "react-windowed-select";

export const Select = styled(WindowedSelect).attrs({
  classNamePrefix: "react-select",
})`
  .react-select__control {
    height: 28px;
    min-height: 28px;
  }

  .react-select__control--is-focused {
    outline: none;
    border: 1px solid ${props => props.theme.colors.highlight} !important;
    box-shadow: 0 0 0px 2px ${props => props.theme.colors.highlight} !important;
    transition: box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.71, 2.65);
  }

  .react-select__value-container {
    padding-top: 0px;
    padding-left: 3px;
    margin-top: -1px;
  }

  .react-select__placeholder {
    margin: 0;
  }

  .react-select__indicator-separator {
    margin: 0;
  }

  .react-select__dropdown-indicator {
    padding: 0;
    width: 26px;
    display: flex;
    justify-content: center;
  }

  .react-select__dropdown-indicator svg {
    width: 16px;
    height: 16px;
  }

  .react-select__option {
    padding: 5px 10px;
    background: ${props => props.theme.colors.menu.background};
  }

  .react-select__option--is-selected {
    color: ${props => props.theme.colors.highlight};
  }

  .react-select__option--is-focused {
    background: ${props => props.theme.colors.menu.hoverBackground};
  }

  .react-select__option:active {
    background: ${props => props.theme.colors.menu.activeBackground};
  }

  input:focus {
    box-shadow: none !important;
  }
`;
