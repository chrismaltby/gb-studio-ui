import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 10px;
  padding-bottom: 0;
  box-sizing: border-box;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  padding-top: 0px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.input.border};

  & > * {
    margin-right: 10px;
  }

  & > *:last-child {
    margin-right: 0px;
  }
`;

export const FormRow = styled.div`
  display: flex;

  & > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  & > *:last-child {
    margin-right: 0px;
  }
`;

export const FormDivider = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.input.border};
`;

export const FormSpacer = styled.div`
  width: 100%;
`;
