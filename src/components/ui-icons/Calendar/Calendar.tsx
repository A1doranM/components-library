import React from "react";
import cn from "classnames";

import CalendarIcon from "src/assets/images/ui-icons/calendar.svg";

import "./calendar.scss";

export interface CalendarInterface {
  className?: string;
}

const Calendar = ({ className = "" }: CalendarInterface): JSX.Element => {
  return <img src={CalendarIcon} alt="long arrow" className={className} />;
};

export default Calendar;
