import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Add from "../Add";

export default {
  title: "ReactComponentLibrary/Add",
  component: Add
} as ComponentMeta<typeof Add>;

const Template: ComponentStory<typeof Add> = (args) => <Add {...args} />;

export const Icon = Template.bind({});
