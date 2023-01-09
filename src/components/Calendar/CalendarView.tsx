import cn from "classnames";
import Calendar from "react-calendar";

import { CalendarViewInterface } from "./iCalendar";

import "./calendar.scss";

const CalendarView = (props: CalendarViewInterface): JSX.Element => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-legend-wrapper">
        <div className="calendar-legend">
          <div className={cn("calendar-legend__icon", "calendar-legend__icon_first")} />
          <p>Початок громадського обговорення</p>
        </div>
        <div className="calendar-legend">
          <div className={cn("calendar-legend__icon", "calendar-legend__icon_second")} />
          <p>Громадське слухання</p>
        </div>
      </div>
      <Calendar
        {...props}
      />
    </div>

  );
};

export default CalendarView;
