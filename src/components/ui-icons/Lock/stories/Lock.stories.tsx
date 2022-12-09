import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Lock from "../Lock";

export default {
  title: "GOV-UA-UI/Icons/Lock",
  component: Lock
} as ComponentMeta<typeof Lock>;

const Template: ComponentStory<typeof Lock> = (args) => <Lock {...args} />;

export const Icon = Template.bind({});
