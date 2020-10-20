import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { SliderField } from "../src/form/SliderField";
import { darkThemeDecorator } from "./helpers";
import { FormRow } from "../src/form/FormLayout";

export default {
  title: "Components/Form Fields/SliderField",
  component: SliderField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <SliderField {...args} />;

export const Interactive = () => {
  const [value, setValue] = useState<number>(50);
  return (
    <div style={{ width: 600 }}>
      <FormRow size="large">
        <SliderField
          name="maxRunVel"
          label="Max Run Velocity"
          value={value}
          min={0}
          max={65535}
          onChange={e => setValue(e)}
        />

        <SliderField
          name="maxRunVel"
          label="Max Run Velocity"
          value={value}
          min={0}
          max={65535}
          onChange={e => setValue(e)}
        />
        <SliderField
          name="maxRunVel"
          label="Max Run Velocity"
          value={value}
          min={0}
          max={65535}
          onChange={e => setValue(e)}
        />

        <SliderField
          name="maxRunVel"
          label="Max Run Velocity"
          value={value}
          min={0}
          max={65535}
          onChange={e => setValue(e)}
        />        
      </FormRow>
      <FormRow size="large">
        <SliderField
          name="maxRunVel"
          label="Max Run Velocity"
          value={value}
          min={0}
          max={65535}
          onChange={e => setValue(e)}
        />

        <SliderField
          name="maxRunVel"
          label="Max Run Velocity"
          value={value}
          min={0}
          max={65535}
          onChange={e => setValue(e)}
        />
        
      </FormRow>      
    </div>
  );
};
