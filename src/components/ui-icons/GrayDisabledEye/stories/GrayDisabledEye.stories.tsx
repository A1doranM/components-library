import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import GrayDisabledEye from "../GrayDisabledEye";

export default {
  title: "GOV-UA-UI/Icons/GrayDisabledEye",
  component: GrayDisabledEye
} as ComponentMeta<typeof GrayDisabledEye>;

const Template: ComponentStory<typeof GrayDisabledEye> = (args) => (
  <GrayDisabledEye {...args} />
);

export const Icon = Template.bind({});
