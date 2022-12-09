import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ShortArrow from "../ShortArrow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Icons/ShortArrow",
  component: ShortArrow
} as ComponentMeta<typeof ShortArrow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShortArrow> = (args) => (
  <ShortArrow {...args} />
);

export const Icon = Template.bind({});
