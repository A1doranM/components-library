import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ShortFilledArrow from "../ShortFilledArrow";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/ShortFilledArrow",
  component: ShortFilledArrow
} as ComponentMeta<typeof ShortFilledArrow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShortFilledArrow> = (args) => <ShortFilledArrow {...args} />;

export const Icon = Template.bind({});
