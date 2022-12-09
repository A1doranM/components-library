import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Help from "../Help";

export default {
  title: "GOV-UA-UI/Icons/Help",
  component: Help
} as ComponentMeta<typeof Help>;

const Template: ComponentStory<typeof Help> = (args) => <Help {...args} />;

export const Icon = Template.bind({});
