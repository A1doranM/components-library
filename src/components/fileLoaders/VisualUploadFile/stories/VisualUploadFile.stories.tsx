import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import VisualUploadFile from "../VisualUploadFile";

export default {
  title: "GOV-UA-UI/FileLoaders/VisualUploadFile",
  component: VisualUploadFile
} as ComponentMeta<typeof VisualUploadFile>;

const Template: ComponentStory<typeof VisualUploadFile> = (args) => (
  <VisualUploadFile {...args} />
);

export const SimpleUpload = Template.bind({});

export const UploadWithArgs = Template.bind({});

UploadWithArgs.args = {
  title: "upl"
};
