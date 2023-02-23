import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import BlankPage from "../BlankPage";

export default {
  title: "GOV-UA-UI/Placeholders/BlankPage",
  component: BlankPage
} as ComponentMeta<typeof BlankPage>;

const Template: ComponentStory<typeof BlankPage> = (args) => (
  <BlankPage {...args} />
);

export const DefaultBlankPage = Template.bind({});
DefaultBlankPage.args = {};
