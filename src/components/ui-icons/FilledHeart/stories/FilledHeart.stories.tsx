import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import FilledHeart from "../FilledHeart";

export default {
  title: "GOV-UA-UI/Icons/FilledHeart",
  component: FilledHeart
} as ComponentMeta<typeof FilledHeart>;

const Template: ComponentStory<typeof FilledHeart> = (args) => (
  <FilledHeart {...args} />
);

export const Icon = Template.bind({});
