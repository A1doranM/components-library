import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Id from "../Id";

export default {
  title: "ReactComponentLibrary/Id",
  component: Id
} as ComponentMeta<typeof Id>;

const Template: ComponentStory<typeof Id> = (args) => <Id {...args} />;

export const Icon = Template.bind({});
