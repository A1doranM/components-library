import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Status from "../Status";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/StatusIndicators/Status",
  component: Status
} as ComponentMeta<typeof Status>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Received = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Received.args = {
  type: "RECEIVED",
  children: "отримано"
};

export const Canceled = Template.bind({});
Canceled.args = {
  type: "CANCELED",
  children: "відмовлено"
};

export const Ordered = Template.bind({});
Ordered.args = {
  type: "ORDERED",
  children: "замовлено"
};

export const Annul = Template.bind({});
Annul.args = {
  type: "ANNUL",
  children: "анульовано"
};

export const Draft = Template.bind({});
Draft.args = {
  type: "DRAFT",
  children: "чернетка"
};

export const Passed = Template.bind({});
Passed.args = {
  type: "PASSED",
  children: "пройшло"
};

export const NotPassed = Template.bind({});
NotPassed.args = {
  type: "NOT-PASSED",
  children: "не пройшло"
};
