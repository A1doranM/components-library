import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Expand from "../Expand";

export default {
  title: "ReactComponentLibrary/Expand",
  component: Expand
} as ComponentMeta<typeof Expand>;

const Template: ComponentStory<typeof Expand> = (args) => <Expand {...args} />;

export const Open = Template.bind({});
Open.args = {
  title: "Документи для подання заявки",
  children:
    "Послуги, які надає держава, складні. Зробити їхпростими для користувача – складна, але необхідна робота. Не змушуйте користувача розбиратися вдержавних механізмах, як і не керуйтеся принципом «так було завжди». Спілкуйтесь з користувачами людяною мовою. Шукайте законні способи спростити досвід користувача. Змінюйте закони."
};
