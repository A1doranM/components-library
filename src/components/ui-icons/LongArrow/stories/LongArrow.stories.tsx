import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import LongArrow from "../LongArrow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/LongArrow",
  component: LongArrow
} as ComponentMeta<typeof LongArrow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LongArrow> = (args) => <LongArrow {...args} />;

export const Weight = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Weight.args = {
  weight: 700,
  children: "отримано"
};

export const Size = Template.bind({});
Size.args = {
  size: 16,
  children: "відмовлено"
};

