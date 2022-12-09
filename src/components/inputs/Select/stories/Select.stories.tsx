import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Select from "../Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Inputs/Select",
  component: Select
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const standardMock = [
  { value: "cfr", label: "CFR" },
  { value: "frc", label: "FRC" },
  { value: "rcf", label: "RCF" }
];

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: standardMock
};

export const Secondary = Template.bind({});
Secondary.args = {
  options: standardMock,
  placeholder: "Chose"
};
