import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagination from "../Pagination";
import CommonButton from "components/buttons/CommonButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Pagination/Pagination",
  component: Pagination
} as ComponentMeta<typeof Pagination>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <BrowserRouter>
    <Pagination {...args} />
  </BrowserRouter>
);

const ArrayOfElements = [
  {
    id: 0,
    element: <h4>Pagination element #1</h4>
  },
  {
    id: 1,
    element: <h4>Pagination element #2</h4>
  },
  {
    id: 2,
    element: <h4>Pagination element #3</h4>
  },
  {
    id: 3,
    element: <h4>Pagination element #4</h4>
  },
  {
    id: 4,
    element: <h4>Pagination element #5</h4>
  },
  {
    id: 5,
    element: <h4>Pagination element #6</h4>
  },
  {
    id: 6,
    element: <h4>Pagination element #7</h4>
  },
  {
    id: 7,
    element: <h4>Pagination element #8</h4>
  },
  {
    id: 8,
    element: <h4>Pagination element #9</h4>
  },
  {
    id: 9,
    element: <h4>Pagination element #10</h4>
  },
  {
    id: 10,
    element: <h4>Pagination element #11</h4>
  }
];

export const Tabs = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tabs.args = {
  itemsPerPage: 5,
  elements: ArrayOfElements
};
