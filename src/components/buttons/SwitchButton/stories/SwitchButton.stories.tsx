import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SwitchButton from "../SwitchButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/SwitchButton',
    component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchButton> = (args) => <SwitchButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//     label: 'Hello world',
// };

export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Click me!',
// };