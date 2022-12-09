import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import RadioButton from "../RadioButton";

export default {
  title: "GOV-UA-UI/Buttons/RadioButton",
  component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: "primary",
  value: "primary",
  checked: true
};

export const Secondary = Template.bind({});

Secondary.args = {
  name: "primary",
  value: "primary",
  checked: false
};
