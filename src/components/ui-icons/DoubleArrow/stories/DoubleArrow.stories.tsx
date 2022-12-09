import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import DoubleArrow from "../DoubleArrow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Icons/DoubleArrow",
  component: DoubleArrow
} as ComponentMeta<typeof DoubleArrow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DoubleArrow> = (args) => (
  <DoubleArrow {...args} />
);

export const Icon = Template.bind({});
