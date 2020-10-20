import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Slider } from "../src/form/Slider";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Form Fields/Slider",
  component: Slider,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <Slider {...args} />;

export const Interactive = () => {
  const [value, setValue] = useState<number>(50);
  return <Slider value={value} min={0} max={100} onChange={e => setValue(e)} />;
};
