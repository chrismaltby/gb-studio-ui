import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextField } from "../src/form/TextField";
import { NumberField } from "../src/form/NumberField";
import { EditableText } from "../src/form/EditableText";
import { NoteField } from "../src/form/NoteField";
import { SelectField } from "../src/form/SelectField";
import { CheckboxField } from "../src/form/CheckboxField";
import { CoordinateInput } from "../src/form/CoordinateInput";
import { SquareSelect } from "../src/form/SquareSelect";
import { ToggleButtonGroupField } from "../src/form/ToggleButtonGroupField";
import {
  FormContainer,
  FormHeader,
  FormRow,
  FormDivider,
  FormSpacer,
} from "../src/form/FormLayout";
import { DropdownButton } from "../src/buttons/DropdownButton";
import { MenuDivider, MenuItem } from "../src/menu/Menu";
import { action } from "@storybook/addon-actions";
import { PinIcon } from "../src/icons/Icons";
import { Checkbox } from "../src/form/Checkbox";
import spriteFile from "./static/sprite.png";

const menuEl = document.getElementById("menu-root");

export default {
  title: "Components/Form Fields/Example Forms",
  component: FormContainer,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

export const ActorEditor = () => {
  return (
    <FormContainer style={{ width: "100%" }}>
      <FormHeader>
        <EditableText
          name="name"
          placeholder="Actor 1"
          value="Actor 1"
          title="Rename Actor 1"
          style={{
            marginLeft: -5,
            fontWeight: "bold",
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
          <MenuItem>
            <Checkbox id="pin" name="pin" checked={true} /> Pin to Screen
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <Checkbox id="pin_actor2" name="pin_actor2" checked={false} /> Actor
            2
          </MenuItem>
          <MenuItem>
            <Checkbox id="pin_actor3" name="pin_actor3" checked={false} /> Actor
            3
          </MenuItem>
        </DropdownButton>
      </FormRow>
      <FormDivider />
      <FormRow>
        <div style={{ display: "flex", width: "100%" }}>
          <SquareSelect
            label="SpriteSheet"
            name="spriteSheetId"
            value={{ label: "Static", value: "static" }}
            options={[]}
            size={48}
            components={{
              DropdownIndicator: () => (
                <div style={{ padding: 5 }}>
                  <img src={spriteFile} style={{ width: "100%" }} />
                </div>
              ),
            }}
          />

          <div style={{ fontSize: 11, lineHeight: "15px", width: "100%", marginLeft: 5 }}>
            <div>
              <strong>Sprite:</strong> Cat
            </div>
            <div>
              <strong>Frames:</strong> 1
            </div>
            <div>
              <strong>Type:</strong> Static
            </div>
          </div>
        </div>
        <div>
          <SquareSelect
            label="SpriteSheet"
            name="spriteSheetId"
            value={{ label: "Static", value: "static" }}
            options={[]}
            size={36}
            components={{
              DropdownIndicator: () => (
                <div style={{ padding: 2 }}>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        background: "rgb(239, 204, 189)",
                        width: 15,
                        height: 15,
                        borderTopLeftRadius: 2,
                      }}
                    />
                    <div
                      style={{
                        background: "rgb(210, 156, 145)",
                        width: 15,
                        height: 15,
                        borderTopRightRadius: 2,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      background: "rgb(15, 42, 55)",
                      width: 30,
                      height: 15,
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                    }}
                  />
                </div>
              ),
            }}
          />
        </div>
      </FormRow>
      <FormRow>
        <NumberField label="Initial Frame" name="initialFrame" value={1} />
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
        <SelectField
          label="Movement Speed"
          name="movementSpeed"
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
        <ToggleButtonGroupField
          label="Collision Group"
          name="collisionGroup"
          value=""
          options={[
            {
              value: "1",
              label: "1",
            },
            {
              value: "2",
              label: "2",
            },
            {
              value: "3",
              label: "3",
            },
          ]}
        />
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
