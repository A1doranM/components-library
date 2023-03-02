import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Alert from "../Alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Notifications/Alert",
  component: Alert
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertSuccess = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertSuccess.args = {
  text: "Документи для подання заявки",
  type: "success"
};

export const AlertError = Template.bind({});

AlertError.args = {
  text: "Документи для подання заявки",
  type: "error"
};

export const AlertWarning = Template.bind({});

AlertWarning.args = {
  text: "Документи для подання заявки",
  type: "warning"
};

export const AlertClosable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertClosable.args = {
  text: "Документи для подання заявки",
  type: "success",
  closable: true
};

export const AlertWithIconClosable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertWithIconClosable.args = {
  text: "Документи для подання заявки",
  type: "success",
  closable: true,
  withIcon: true
};
