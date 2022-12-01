import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CancelCertificate from "../CancelCertificate";

export default {
  title: "ReactComponentLibrary/CancelCertificate",
  component: CancelCertificate
} as ComponentMeta<typeof CancelCertificate>;

const Template: ComponentStory<typeof CancelCertificate> = (args) => <CancelCertificate {...args} />;

export const Icon = Template.bind({});
