import React from "react";

import CalendarIcon from "../../../assets/images/ui-icons/calendar.svg";

import "./calendar.scss";

export interface CalendarInterface {
  className?: string;
}

const Calendar = ({ className = "" }: CalendarInterface): JSX.Element => {
  return <img src={CalendarIcon} alt="calendar" className={className} />;
};

export default Calendar;
