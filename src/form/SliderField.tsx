import React, { FC } from "react";
import styled from "styled-components";
import { Slider } from "./Slider";
import { Label } from "./Label";
import { Input } from "./Input";

export interface SliderFieldProps {
  name: string;
  label?: string;
  value?: number;
  min: number;
  max: number;
  onChange?: (value: number) => void;
}

const Wrapper = styled.div`
  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;

  ${Input} {
    width: 70px;
    margin-right: 10px;
  }
`;

export const SliderField: FC<SliderFieldProps> = ({
  name,
  label,
  value,
  min,
  max,
  onChange,
}) => (
  <Wrapper>
    {label && <Label htmlFor={name}>{label}</Label>}
    <InnerWrapper>
      <Input
        id={name}
        type="number"
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={e =>
          onChange?.(
            Math.min(max, Math.max(min, parseInt(e.currentTarget.value)))
          )
        }
      />
      <Slider value={value || 0} min={min} max={max} onChange={onChange} />
    </InnerWrapper>
  </Wrapper>
);

SliderField.defaultProps = {
  value: undefined,
};
