import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Copy from "../Copy";

export default {
  title: "ReactComponentLibrary/Copy",
  component: Copy
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = (args) => <Copy {...args} />;

export const Icon = Template.bind({});
