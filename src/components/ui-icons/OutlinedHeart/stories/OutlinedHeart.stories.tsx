import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import OutlinedHeart from "../OutlinedHeart";

export default {
  title: "ReactComponentLibrary/OutlinedHeart",
  component: OutlinedHeart
} as ComponentMeta<typeof OutlinedHeart>;

const Template: ComponentStory<typeof OutlinedHeart> = (args) => <OutlinedHeart {...args} />;

export const Icon = Template.bind({});
