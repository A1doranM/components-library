import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Calendar from "../Calendar";

export default {
  title: "ReactComponentLibrary/Calendar",
  component: Calendar
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const Icon = Template.bind({});
