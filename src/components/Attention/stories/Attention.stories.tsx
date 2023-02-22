import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Attention from "../Attention";

export default {
  title: "GOV-UA-UI/Notifications/Attention",
  component: Attention
} as ComponentMeta<typeof Attention>;

const Template: ComponentStory<typeof Attention> = (args) => (
  <BrowserRouter>
    <Attention {...args} />
  </BrowserRouter>
);

export const OldAttention = Template.bind({});
OldAttention.args = {
  date: "2023-01-01",
  text: "Text Attention",
  title: "Test Title"
};

export const NewAttention = Template.bind({});
NewAttention.args = {
  date: "2023-01-01",
  status: "NEW",
  text: "Text Attention",
  title: "Test Title"
};

export const ImportantAttention = Template.bind({});
ImportantAttention.args = {
  date: "2023-01-01",
  status: "IMPORTANT",
  text: "Text Attention",
  title: "Test Title"
};

export const LinkAttention = Template.bind({});
LinkAttention.args = {
  date: "2023-01-01",
  status: "IMPORTANT",
  text: "Text Attention",
  title: "Test Title",
  link: "#"
};
