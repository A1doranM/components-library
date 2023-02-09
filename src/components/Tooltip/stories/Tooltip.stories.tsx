import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tooltip from "../index";

export default {
  title: "GOV-UA-UI/Modals/Tooltip",
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "170px",
      width: "300px",
      justifyContent: "flex-end",
      alignItems: "center"
    }}
  >
    <Tooltip content={args.content} show={true}>
      {args.children}
    </Tooltip>
  </div>
);

export const TextTooltip = Template.bind({});
TextTooltip.args = {
  content: "Tooltip",
  children: <button>Tooltip</button>
};

export const TooltipWithContent = Template.bind({});
TooltipWithContent.args = {
  content: (
    <div>
      <h1>Some header</h1>
      <p>Some text</p>
    </div>
  ),
  children: <button>Button with tooltip</button>
};
