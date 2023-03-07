import { CalendarProps } from "react-calendar";

export interface CalendarEventInterface {
  dateFrom: Date;
  dateTo?: Date;
  description: {
    title: string;
    bodyTitle: string;
    body: string;
    footer: string;
  };
  grade: "PRIMARY" | "SECONDARY";
}

export interface CalendarViewInterface extends CalendarProps {
  events?: Array<CalendarEventInterface>;
}

export interface CalendarContainerInterface {
  events?: Array<CalendarEventInterface>;
}
