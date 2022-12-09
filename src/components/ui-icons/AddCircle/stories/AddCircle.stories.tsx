import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AddCircle from "../AddCircle";

export default {
  title: "GOV-UA-UI/Icons/AddCircle",
  component: AddCircle
} as ComponentMeta<typeof AddCircle>;

const Template: ComponentStory<typeof AddCircle> = (args) => (
  <AddCircle {...args} />
);

export const Icon = Template.bind({});
