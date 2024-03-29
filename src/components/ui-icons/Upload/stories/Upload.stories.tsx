import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Upload from "../Upload";

export default {
  title: "GOV-UA-UI/Icons/Upload",
  component: Upload
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Icon = Template.bind({});
