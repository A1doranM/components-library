import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Calendar from "../CalendarContainer";
import { CalendarEventInterface } from "../iCalendar";

export default {
  title: "GOV-UA-UI/Calendars/Calendar",
  component: Calendar
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

const eventsMock: Array<CalendarEventInterface> = [
  {
    dateFrom: new Date("2023-02-10"), // "10.02.2023",
    dateTo: new Date("2023-02-12"),
    description: {
      title: "10 Лютого 2023 | 12:00",
      bodyTitle: "Місце проведення",
      body: "м Дніпро, Бульвар Зоряний 1",
      footer: "Громадські слухання справи 323232343"
    },
    grade: "PRIMARY"
  },
  {
    dateFrom: new Date("2023-01-19"),
    dateTo: new Date("2023-01-25"),
    description: {
      title: "19 Січня 2023 | 12:00",
      bodyTitle: "Місце проведення",
      body: "м Дніпро, Бульвар Зоряний 1",
      footer: "Громадські слухання справи 323232343"
    },
    grade: "SECONDARY"
  },
  {
    dateFrom: new Date("2023-01-15"),
    description: {
      title: "19 Січня 2023 | 12:00",
      bodyTitle: "Місце проведення",
      body: "м Дніпро, Бульвар Зоряний 1",
      footer: "Громадські слухання справи 323232343"
    },
    grade: "SECONDARY"
  }
];

export const DefaultCalendar = Template.bind({});
DefaultCalendar.args = {
  events: eventsMock
};
