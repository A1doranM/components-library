import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Swap from "../Swap";

export default {
  title: "GOV-UA-UI/Icons/Swap",
  component: Swap
} as ComponentMeta<typeof Swap>;

const Template: ComponentStory<typeof Swap> = (args) => <Swap {...args} />;

export const Icon = Template.bind({});
