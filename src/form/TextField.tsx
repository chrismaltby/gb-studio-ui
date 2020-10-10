import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { FormField } from "./FormLayout";
import { Input } from "./Input";

export interface TextFieldProps {
  readonly name: string;
  readonly label?: string;
  readonly value?: string;
  readonly size?: "small" | "medium" | "large";
  readonly additionalRight?: ReactNode;
}

const AdditionalWrapper = styled.div`
  position: relative;
`;

const AdditionalRight = styled.div`
  position: absolute;
  top: 3px;
  bottom: 3px;
  right: 3px;
  display: flex;

  & > * {
    height: 100%;
    margin-left: 5px;
  }
`;

export const TextField: FC<TextFieldProps> = ({
  name,
  label,
  size,
  value,
  additionalRight,
}) => (
  <FormField name={name} label={label}>
    {additionalRight ? (
      <AdditionalWrapper>
        <Input id={name} name={name} value={value} displaySize={size} />
        <AdditionalRight>{additionalRight}</AdditionalRight>
      </AdditionalWrapper>
    ) : (
      <Input id={name} name={name} value={value} displaySize={size} />
    )}
  </FormField>
);

TextField.defaultProps = {
  value: "",
};
