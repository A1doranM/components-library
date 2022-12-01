import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import GrayEye from "../GrayEye";

export default {
  title: "ReactComponentLibrary/GrayEye",
  component: GrayEye
} as ComponentMeta<typeof GrayEye>;

const Template: ComponentStory<typeof GrayEye> = (args) => <GrayEye {...args} />;

export const Icon = Template.bind({});
