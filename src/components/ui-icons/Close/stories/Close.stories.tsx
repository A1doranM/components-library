import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Close from "../Close";

export default {
  title: "GOV-UA-UI/Icons/CanceClosel",
  component: Close
} as ComponentMeta<typeof Close>;

const Template: ComponentStory<typeof Close> = (args) => <Close {...args} />;

export const Icon = Template.bind({});
