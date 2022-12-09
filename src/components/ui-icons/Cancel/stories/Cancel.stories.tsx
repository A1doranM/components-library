import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Cancel from "../Cancel";

export default {
  title: "GOV-UA-UI/Icons/Cancel",
  component: Cancel
} as ComponentMeta<typeof Cancel>;

const Template: ComponentStory<typeof Cancel> = (args) => <Cancel {...args} />;

export const Icon = Template.bind({});
