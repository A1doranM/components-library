import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Google from "../Google";

export default {
  title: "GOV-UA-UI/Icons/Google",
  component: Google
} as ComponentMeta<typeof Google>;

const Template: ComponentStory<typeof Google> = (args) => <Google {...args} />;

export const Icon = Template.bind({});
