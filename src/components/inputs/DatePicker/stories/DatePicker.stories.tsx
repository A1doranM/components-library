// @ts-nocheck

import { ComponentMeta, ComponentStory } from "@storybook/react";

import DatePicker from "components/inputs/DatePicker";

export default {
  title: "GOV-UA-UI/Inputs/DatePicker",
  component: DatePicker
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof Select> = (args) => (
  <DatePicker {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onChange: (date: Date): void => {},
  placeholder: "Pick date"
};
