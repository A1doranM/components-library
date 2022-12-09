import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Plus from "../Plus";

export default {
  title: "GOV-UA-UI/Icons/Plus",
  component: Plus
} as ComponentMeta<typeof Plus>;

const Template: ComponentStory<typeof Plus> = (args) => <Plus {...args} />;

export const Icon = Template.bind({});
