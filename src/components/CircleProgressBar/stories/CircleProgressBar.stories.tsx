import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CircleProgressBar from "../CircleProgressBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/ProgressIndicators/CircleProgressBar",
  component: CircleProgressBar
} as ComponentMeta<typeof CircleProgressBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleProgressBar> = (args) => (
  <CircleProgressBar {...args} />
);

export const Progress50 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Progress50.args = {
  progress: 50
};

export const Progress75 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Progress75.args = {
  progress: 75
};
