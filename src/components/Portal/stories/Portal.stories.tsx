import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Portal from "../index";

export default {
  title: "GOV-UA-UI/Modals/Portal",
  component: Portal
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args) => (
  <Portal>{args.children}</Portal>
);

export const DefaultPortal = Template.bind({});
DefaultPortal.args = {
  content: <p>Test</p>
};
