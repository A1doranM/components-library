import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Download from "../Download";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Download",
  component: Download
} as ComponentMeta<typeof Download>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Download> = (args) => <Download {...args} />;

export const Icon = Template.bind({});
