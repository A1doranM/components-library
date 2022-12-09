import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Print from "../Print";

export default {
  title: "GOV-UA-UI/Icons/Print",
  component: Print
} as ComponentMeta<typeof Print>;

const Template: ComponentStory<typeof Print> = (args) => <Print {...args} />;

export const Icon = Template.bind({});
