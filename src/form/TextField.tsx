import React, { FC } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { Label } from "./Label";

export interface TextFieldProps {
  name: string;
  label?: string;
  value?: string;
}

const Wrapper = styled.div`
  width: 100%;
`;

export const TextField: FC<TextFieldProps> = ({ name, label, value }) => (
  <Wrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input id={name} name={name} value={value} />
  </Wrapper>
);

TextField.defaultProps = {
  value: "",
};
