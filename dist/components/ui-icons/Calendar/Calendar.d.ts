import "./calendar.scss";
export interface CalendarInterface {
    className?: string;
}
declare const Calendar: ({ className }: CalendarInterface) => JSX.Element;
export default Calendar;
