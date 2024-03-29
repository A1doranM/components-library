import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Grn from "../Grn";

export default {
  title: "GOV-UA-UI/Icons/Grn",
  component: Grn
} as ComponentMeta<typeof Grn>;

const Template: ComponentStory<typeof Grn> = (args) => <Grn {...args} />;

export const Icon = Template.bind({});
