import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CancelCertificate from "../CancelCertificate";

export default {
  title: "GOV-UA-UI/Icons/CancelCertificate",
  component: CancelCertificate
} as ComponentMeta<typeof CancelCertificate>;

const Template: ComponentStory<typeof CancelCertificate> = (args) => (
  <CancelCertificate {...args} />
);

export const Icon = Template.bind({});
