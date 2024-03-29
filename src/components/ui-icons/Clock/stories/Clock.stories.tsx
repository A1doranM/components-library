import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Clock from "../Clock";

export default {
  title: "GOV-UA-UI/Icons/Clock",
  component: Clock
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Icon = Template.bind({});
