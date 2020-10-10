import React, { FC } from 'react';
import styled from "styled-components";
import { Label } from './Label';

export const FormContainer = styled.div``;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
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
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;

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

const FormFieldWrapper = styled.div`
  width: 100%;
`;

export interface FormFieldProps {
  readonly name: string;
  readonly label?: string;
}

export const FormField: FC<FormFieldProps> = ({ name, label, children }) => (
  <FormFieldWrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    {children}
  </FormFieldWrapper>
);
