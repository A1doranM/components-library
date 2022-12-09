import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SimpleUploadFile from "../SimpleUploadFile";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/FileLoaders/SimpleUploadFile",
  component: SimpleUploadFile
} as ComponentMeta<typeof SimpleUploadFile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleUploadFile> = (args) => (
  <SimpleUploadFile {...args} />
);

export const SimpleUpload = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const UploadWithArgs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

UploadWithArgs.args = {
  text: "Текст для загрузки",
  uploadedText: "Ви загрузили"
};
