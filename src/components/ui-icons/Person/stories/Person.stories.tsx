import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Person from "../Person";

export default {
  title: "GOV-UA-UI/Icons/Person",
  component: Person
} as ComponentMeta<typeof Person>;

const Template: ComponentStory<typeof Person> = (args) => <Person {...args} />;

export const Icon = Template.bind({});
