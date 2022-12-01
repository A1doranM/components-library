import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Mail from "../Mail";

export default {
  title: "ReactComponentLibrary/Mail",
  component: Mail
} as ComponentMeta<typeof Mail>;

const Template: ComponentStory<typeof Mail> = (args) => <Mail {...args} />;

export const Icon = Template.bind({});
