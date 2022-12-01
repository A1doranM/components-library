import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SettingsBlack from "../SettingsBlack";

export default {
  title: "ReactComponentLibrary/SettingsBlack",
  component: SettingsBlack
} as ComponentMeta<typeof SettingsBlack>;

const Template: ComponentStory<typeof SettingsBlack> = (args) => <SettingsBlack {...args} />;

export const Icon = Template.bind({});
