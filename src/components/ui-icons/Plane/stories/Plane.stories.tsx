import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Plane from "../Plane";

export default {
  title: "GOV-UA-UI/Icons/Plane",
  component: Plane
} as ComponentMeta<typeof Plane>;

const Template: ComponentStory<typeof Plane> = (args) => <Plane {...args} />;

export const Icon = Template.bind({});
