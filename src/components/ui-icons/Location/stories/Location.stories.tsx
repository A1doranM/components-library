import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Location from "../Location";

export default {
  title: "ReactComponentLibrary/Location",
  component: Location
} as ComponentMeta<typeof Location>;

const Template: ComponentStory<typeof Location> = (args) => <Location {...args} />;

export const Icon = Template.bind({});
