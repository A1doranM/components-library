import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Enter from "../Enter";

export default {
  title: "ReactComponentLibrary/Enter",
  component: Enter
} as ComponentMeta<typeof Enter>;

const Template: ComponentStory<typeof Enter> = (args) => <Enter {...args} />;

export const Icon = Template.bind({});
