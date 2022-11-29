import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Reload from "../Reload";

export default {
  title: "ReactComponentLibrary/Reload",
  component: Reload
} as ComponentMeta<typeof Reload>;

const Template: ComponentStory<typeof Reload> = (args) => <Reload {...args} />;

export const Icon = Template.bind({});
