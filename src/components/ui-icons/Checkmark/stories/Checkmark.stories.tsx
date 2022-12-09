import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkmark from "../Checkmark";

export default {
  title: "GOV-UA-UI/Icons/Checkmark",
  component: Checkmark
} as ComponentMeta<typeof Checkmark>;

const Template: ComponentStory<typeof Checkmark> = (args) => (
  <Checkmark {...args} />
);

export const Icon = Template.bind({});
