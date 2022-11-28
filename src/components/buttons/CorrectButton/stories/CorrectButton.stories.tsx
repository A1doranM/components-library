import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CorrectButton from "../CorrectButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/CorrectButton',
    component: CorrectButton,
} as ComponentMeta<typeof CorrectButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CorrectButton> = (args) => <CorrectButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: 'Правильно',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Не правильно',
};