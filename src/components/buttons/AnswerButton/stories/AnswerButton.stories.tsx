import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AnswerButton from "../AnswerButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Buttons/AnswerButton",
  component: AnswerButton
} as ComponentMeta<typeof AnswerButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AnswerButton> = (args) => (
  <AnswerButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Правильно"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Не правильно"
};
