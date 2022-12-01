import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Title from "../Title";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Title",
  component: Title
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

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

