import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import BlackEye from "../BlackEye";

export default {
  title: "GOV-UA-UI/Icons/BlackEye",
  component: BlackEye
} as ComponentMeta<typeof BlackEye>;

const Template: ComponentStory<typeof BlackEye> = (args) => (
  <BlackEye {...args} />
);

export const Icon = Template.bind({});
