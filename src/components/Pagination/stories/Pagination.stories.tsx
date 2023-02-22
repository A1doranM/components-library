import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagination from "../Pagination";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Paginations/Pagination",
  component: Pagination
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <BrowserRouter>
    <Pagination {...args} />
  </BrowserRouter>
);

export const DefaultPagination = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultPagination.args = {
  pageCount: 2
};
