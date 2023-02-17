import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Tooltip from "../index";

export default {
  title: "GOV-UA-UI/Modals/Tooltip",
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div
    id="test"
    style={{
      display: "flex",
      flexDirection: "column",
      height: "170px",
      width: "500px",
      justifyContent: "flex-end",
      alignItems: "center",
      overflowX: "auto"
    }}
  >
    <div
      style={{
        display: "flex",
        height: "170px",
        width: "1500px",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Tooltip
        content={args.content}
        show={true}
        positionRegardingToElementId="test"
      >
        {args.children}
      </Tooltip>
    </div>
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
