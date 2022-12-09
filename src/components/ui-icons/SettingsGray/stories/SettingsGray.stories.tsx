import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SettingsGray from "../SettingsGray";

export default {
  title: "GOV-UA-UI/Icons/SettingsGray",
  component: SettingsGray
} as ComponentMeta<typeof SettingsGray>;

const Template: ComponentStory<typeof SettingsGray> = (args) => (
  <SettingsGray {...args} />
);

export const Icon = Template.bind({});
