import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TrashDefaultIcon } from "components";
import CommonButton from "../CommonButton";
import PlusIcon from "../../../../assets/images/ui-icons/plus.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GOV-UA-UI/Buttons/CommonButton",
  component: CommonButton
} as ComponentMeta<typeof CommonButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonButton> = (args) => (
  <CommonButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Hello world",
  image: <TrashDefaultIcon />
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Click me!",
  outlined: true
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  outlined: true,
  label: (
    <>
      <p> Розширений пошук</p>
      <img
        src={PlusIcon}
        className="test image class"
        alt="advinced button arrow"
      />
    </>
  )
};

export const WithImage = Template.bind({});
WithImage.args = {
  label: "Click me!",
  outlined: true,
  image: PlusIcon
};

export const RoundWithImage = Template.bind({});
RoundWithImage.args = {
  outlined: true,
  round: true,
  image: PlusIcon
};
