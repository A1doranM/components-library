import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import PdfUploadFile from "../PdfUploadFile";

export default {
  title: "GOV-UA-UI/FileLoaders/PdfUploadFile",
  component: PdfUploadFile
} as ComponentMeta<typeof PdfUploadFile>;

const Template: ComponentStory<typeof PdfUploadFile> = (args) => (
  <PdfUploadFile {...args} />
);

export const SimpleUpload = Template.bind({});

export const UploadWithArgs = Template.bind({});

UploadWithArgs.args = {
  title: "Завантажити"
};
