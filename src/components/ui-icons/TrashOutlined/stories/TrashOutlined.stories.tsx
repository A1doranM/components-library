import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TrashOutlined from "../TrashOutlined";

export default {
  title: "GOV-UA-UI/Icons/TrashOutlined",
  component: TrashOutlined
} as ComponentMeta<typeof TrashOutlined>;

const Template: ComponentStory<typeof TrashOutlined> = (args) => (
  <TrashOutlined {...args} />
);

export const Icon = Template.bind({});
