import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Document from "../Document";

export default {
  title: "GOV-UA-UI/Icons/Document",
  component: Document
} as ComponentMeta<typeof Document>;

const Template: ComponentStory<typeof Document> = (args) => (
  <Document {...args} />
);

export const Icon = Template.bind({});
