import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AddCircle from "../AddCircle";

export default {
  title: "ReactComponentLibrary/AddCircle",
  component: AddCircle
} as ComponentMeta<typeof AddCircle>;

const Template: ComponentStory<typeof AddCircle> = (args) => <AddCircle {...args} />;

export const Icon = Template.bind({});
