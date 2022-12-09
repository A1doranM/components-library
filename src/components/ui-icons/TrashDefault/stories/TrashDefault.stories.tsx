import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TrashDefault from "../TrashDefault";

export default {
  title: "GOV-UA-UI/Icons/TrashDefault",
  component: TrashDefault
} as ComponentMeta<typeof TrashDefault>;

const Template: ComponentStory<typeof TrashDefault> = (args) => (
  <TrashDefault {...args} />
);

export const Icon = Template.bind({});
