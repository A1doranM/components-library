import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Navigation from "../Navigation";
import CommonButton from "components/buttons/CommonButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Navigation",
  component: Navigation
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = (args) => (
  <BrowserRouter>
    <Navigation {...args} />
  </BrowserRouter>
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
  {
    text: "",
    to: "/test3",
    customContent: <CommonButton label="test3" />
  }
];

export const Tabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tabs.args = {
  navLinks: navigationLinks
};
