import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Search from "../Search";

export default {
  title: "ReactComponentLibrary/Search",
  component: Search
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Icon = Template.bind({});
