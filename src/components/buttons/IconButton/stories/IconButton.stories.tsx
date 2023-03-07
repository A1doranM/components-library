import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CloseIcon from "assets/images/icons/cancel.svg";
import IconButton from "../IconButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Buttons/IconButton",
  component: IconButton
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  icon: CloseIcon
};

