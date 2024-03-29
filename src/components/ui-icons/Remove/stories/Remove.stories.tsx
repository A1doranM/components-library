import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Remove from "../Remove";

export default {
  title: "GOV-UA-UI/Icons/Remove",
  component: Remove
} as ComponentMeta<typeof Remove>;

const Template: ComponentStory<typeof Remove> = (args) => <Remove {...args} />;

export const Icon = Template.bind({});
