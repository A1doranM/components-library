import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navigation from "../Navigation";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Navigation",
  component: Navigation
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

const navigationLinks = [
  {
    text: "Зверніть увагу",
    to: "/test"
  },
  {
    text: "Чернетки",
    to: "/test1"
  },
  {
    text: "Замовлені",
    to: "/test2"
  },
];

export const Tabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tabs.args = {
  title: "Title",
  navLinks: navigationLinks
};
