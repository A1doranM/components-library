import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CommonButton from "../CommonButton";
import PlusIcon from "assets/images/ui-icons/plus.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/CommonButton",
  component: CommonButton
} as ComponentMeta<typeof CommonButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonButton> = (args) => (
  <CommonButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Hello world"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Click me!",
  outlined: true
};

export const WithImage = Template.bind({});
WithImage.args = {
  label: "Click me!",
  outlined: true,
  image: PlusIcon
};

export const RoundWithImage = Template.bind({});
RoundWithImage.args = {
  outlined: true,
  round: true,
  image: PlusIcon
};
