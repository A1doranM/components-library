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

SimpleUpload.args = {};

export const UploadWithTitle = Template.bind({});

UploadWithTitle.args = {
  title: "Завантажити",
  loadedFile: {
    type: 'application/pdf',
    preview: 'https://klike.net/uploads/posts/2020-04/1587719791_1.jpg'
  }
};

export const ShowUploadLoader = Template.bind({});

const p = 0;

// const returnP = () => {
//   return set
// }

ShowUploadLoader.args = {
  title: "Завантажити"
};
