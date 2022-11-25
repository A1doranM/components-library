import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Notification from "../Notification";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Notification",
  component: Notification
} as ComponentMeta<typeof Notification>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const ClearNotification = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClearNotification.args = {
  text: "Документи для подання заявки",
};

export const WithButtonNotification = Template.bind({});

WithButtonNotification.args = {
  text: "Документи для подання заявки",
  withButton: true,
};

