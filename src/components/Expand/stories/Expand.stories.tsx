import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import AnswerButton from "components/buttons/AnswerButton";
import Expand from "../Expand";

export default {
  title: "GOV-UA-UI/Dropdowns/Expand",
  component: Expand
} as ComponentMeta<typeof Expand>;

const Template: ComponentStory<typeof Expand> = (args) => <Expand {...args} />;

export const Open = Template.bind({});
Open.args = {
  title: "Документи для подання заявки",
  children: <AnswerButton>dsadsadsa</AnswerButton>
};
