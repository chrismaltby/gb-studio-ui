import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextField } from "../src/form/TextField";
import { NumberField } from "../src/form/NumberField";
import { darkThemeDecorator } from "./helpers";
import { EditableText } from "../src/form/EditableText";
import { NoteField } from "../src/form/NoteField";
import { SelectField } from "../src/form/SelectField";
import { CheckboxField } from "../src/form/CheckboxField";
import { CoordinateInput } from "../src/form/CoordinateInput";
import {
  FormContainer,
  FormHeader,
  FormRow,
  FormDivider,
  FormSpacer,
} from "../src/form/FormLayout";
import { Button } from "../src/buttons/Button";
import { DropdownButton } from "../src/buttons/DropdownButton";
import { MenuDivider, MenuItem } from "../src/menu/Menu";
import { action } from "@storybook/addon-actions";
import { PinIcon } from "../src/icons/Icons";

export default {
  title: "Components/Form Fields/Example Forms",
  component: FormContainer,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

export const ActorEditor = () => {
  return (
    <FormContainer style={{ width: "100%", backgroundColor: "#fafafa" }}>
      <FormHeader>
        <EditableText
          name="name"
          placeholder="Actor 1"
          value="Actor 1"
          title="Rename Actor 1"
          style={{
              marginLeft: -5,
              fontWeight: "bold"
          }}
        />
        <DropdownButton
          size="small"
          variant="transparent"
          menuDirection="right"
        >
          <MenuItem onClick={action("copy")}>Copy Actor</MenuItem>
          <MenuDivider />
          <MenuItem onClick={action("delete")}>Delete Actor</MenuItem>
        </DropdownButton>
      </FormHeader>

      <FormRow>
        <CoordinateInput name="x" coordinate="x" value={0} />
        <CoordinateInput name="y" coordinate="y" value={0} />
        <DropdownButton
          menuDirection="right"
          label={<PinIcon />}
          showArrow={false}
          style={{
            padding: 5,
            minWidth: 36,
          }}
        >
          <MenuItem>Pin to Screen</MenuItem>
        </DropdownButton>
      </FormRow>
      <FormDivider />
      <FormRow>
        <NumberField label="Initial Frame" name="initialFrame" value={0} />
        <SelectField
          label="Sprite Type"
          name="spriteType"
          value={{ label: "Static", value: "static" }}
          options={[
            {
              value: "static",
              label: "Static",
            },
            {
              value: "actor",
              label: "Actor",
            },
          ]}
        />
      </FormRow>
      <FormRow>
        <CheckboxField name="animate" label="Animate while stationary" />
      </FormRow>
      <FormDivider />
      <FormRow>
        <TextField label="Movement Speed" name="movementSpeed" value="0" />
        <SelectField
          label="Animation Speed"
          name="animationSpeed"
          value={{ label: "0 (Slower)", value: "0" }}
          options={[
            {
              value: "0",
              label: "0 (Slower)",
            },
            {
              value: "5",
              label: "5 (Faster)",
            },
          ]}
        />
      </FormRow>
      <FormDivider />
      <FormRow>
        <TextField label="Collision Group" name="collisionGroup" value="" />
        <FormSpacer />
      </FormRow>
      <FormDivider />
    </FormContainer>
  );
};

export const TriggerEditor = () => {
  return (
    <FormContainer style={{ width: 300, backgroundColor: "#fafafa" }}>
      <FormHeader>
        <EditableText name="name" placeholder="Trigger 1" value="Trigger 1" />
        <DropdownButton
          size="small"
          variant="transparent"
          menuDirection="right"
        >
          <MenuItem onClick={action("copy")}>Copy Trigger</MenuItem>
          <MenuDivider />
          <MenuItem onClick={action("delete")}>Delete Trigger</MenuItem>
        </DropdownButton>
      </FormHeader>
      <FormRow>
        <NoteField value="Notes about this trigger and why it exists." />
      </FormRow>
      <FormRow>
        <CoordinateInput name="x" coordinate="x" value={0} />
        <CoordinateInput name="y" coordinate="y" value={0} />
      </FormRow>
      <FormRow>
        <CoordinateInput name="width" coordinate="w" value={2} />
        <CoordinateInput name="height" coordinate="h" value={1} />
      </FormRow>
      <FormDivider />
    </FormContainer>
  );
};
