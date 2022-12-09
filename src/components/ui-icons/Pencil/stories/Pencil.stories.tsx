import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pencil from "../Pencil";

export default {
  title: "GOV-UA-UI/Icons/Pencil",
  component: Pencil
} as ComponentMeta<typeof Pencil>;

const Template: ComponentStory<typeof Pencil> = (args) => <Pencil {...args} />;

export const Icon = Template.bind({});
