import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Autocomplete from "../Autocomplete";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Inputs/Autocomplete",
  component: Autocomplete
} as ComponentMeta<typeof Autocomplete>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} placeholder="test placeholder" />
);

const standardMock = [
  { value: "cfrk", label: "CFRK" },
  { value: "frcl", label: "FRCL" },
  { value: "rcfo", label: "RCFO" }
];


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  client: {
    url: "https://jsonplaceholder.typicode.com/todos"
  },
  options: standardMock

};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: "Chose",
  initialValue: "LLLL",
  options: standardMock
};
