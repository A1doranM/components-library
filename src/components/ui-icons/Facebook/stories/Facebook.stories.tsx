import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Facebook from "../Facebook";

export default {
  title: "GOV-UA-UI/Icons/Facebook",
  component: Facebook
} as ComponentMeta<typeof Facebook>;

const Template: ComponentStory<typeof Facebook> = (args) => (
  <Facebook {...args} />
);

export const Icon = Template.bind({});
