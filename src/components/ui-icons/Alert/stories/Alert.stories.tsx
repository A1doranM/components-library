import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Alert from "../Alert";

export default {
  title: "ReactComponentLibrary/Alert",
  component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Icon = Template.bind({});
