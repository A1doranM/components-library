import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Expand from "../Expand";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Expand",
  component: Expand
} as ComponentMeta<typeof Expand>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Expand> = (args) => <Expand {...args} />;

export const Open = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Open.args = {
  title: "Документи для подання заявки",
  children: "Послуги, які надає держава, складні. Зробити їхпростими для користувача – складна, але необхідна робота. Не змушуйте користувача розбиратися вдержавних механізмах, як і не керуйтеся принципом «так було завжди». Спілкуйтесь з користувачами людяною мовою. Шукайте законні способи спростити досвід користувача. Змінюйте закони."
};
