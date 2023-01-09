import cn from "classnames";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  CalendarTileProperties,
  Detail,
  ViewCallbackProperties
} from "react-calendar";

import CalendarView from "./CalendarView";
import {
  CalendarContainerInterface,
  CalendarEventInterface
} from "./iCalendar";

import { CommonButton, LongArrowIcon, Select, Tooltip } from "../index";

import "./calendar.scss";

const CalendarContainer = ({ events }: CalendarContainerInterface) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isDoubleView, setIsDoubleView] = useState(true);
  const [highlightedElements, setHighlightedElements] =
    useState<NodeListOf<Element>>();

  const renderSelectToNavigationBar = () => {
    const navDivider = document.getElementsByClassName(
      "react-calendar__navigation__label__divider"
    )[0];

    if (navDivider) {
      navDivider.innerHTML = "";
      navDivider.parentElement?.removeAttribute("disabled");

      const selectOptions = [];
      const currentDate = startDate.getFullYear();

      for (let i = 0; i <= 10; i++) {
        selectOptions.push({
          value: currentDate + i,
          label: currentDate + i
        });
      }

      // @ts-ignore
      const root = ReactDOM.createRoot(navDivider);
      root.render(
        <Select
          className="calendar__year"
          options={selectOptions}
          onChange={handleYearChange}
          placeholder={selectOptions[0].label.toString()}
        />
      );
    }
  };

  const handleWindowResize = () => {
    if (document.body.clientWidth < 906) {
      setIsDoubleView(false);
    } else {
      setIsDoubleView(true);
      renderSelectToNavigationBar();
    }
  };

  useEffect(() => {
    const calendarWrapper =
      document.getElementsByClassName("calendar-wrapper")[0];

    if (calendarWrapper) {
      window.addEventListener("resize", handleWindowResize);
    }

    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleYearChange = (value: any) => {
    let newYear = new Date().setFullYear(parseInt(value.value, 10));
    setStartDate(new Date(newYear));
  };

  const renderNavigationLabel = ({
    label
  }: {
    date: Date;
    label: string;
    locale: string;
    view: Detail;
  }): string | JSX.Element | null => {
    const currentMonth = label.split(" ")[0];
    return <p className="calendar__month">{currentMonth}</p>;
  };

  const highlightEvent = (
    e: React.MouseEvent<HTMLDivElement>,
    event: CalendarEventInterface
  ) => {
    const elementsForHighlight = document.querySelectorAll(
      `div[data-date='${event.dateFrom.toLocaleDateString()}']`
    );

    if (elementsForHighlight.length > 1) {
      for (let i = 0; i < elementsForHighlight.length; i++) {
        if (i === 0) {
          elementsForHighlight[0].classList.add(
            "react-calendar__long-events-start"
          );
          continue;
        }

        if (i === elementsForHighlight.length - 1) {
          elementsForHighlight[i].classList.add(
            "react-calendar__long-events-end"
          );
          continue;
        }

        elementsForHighlight[i].classList.add(
          "react-calendar__long-events-intermediate-part"
        );
      }

      setHighlightedElements(elementsForHighlight);
    }
  };

  const stopHighlightEvent = () => {
    if (highlightedElements && highlightedElements.length > 1) {
      for (let i = 0; i < highlightedElements.length; i++) {
        if (i === 0) {
          highlightedElements[0].classList.remove(
            "react-calendar__long-events-start"
          );
          continue;
        }

        if (i === highlightedElements.length - 1) {
          highlightedElements[i].classList.remove(
            "react-calendar__long-events-end"
          );
          continue;
        }

        highlightedElements[i].classList.remove(
          "react-calendar__long-events-intermediate-part"
        );
      }
    }
  };

  const renderTileContent = (
    event: CalendarEventInterface,
    date: Date,
    isIntermediate: boolean
  ) => {
    return (
      <Tooltip
        content={
          <div className="calendar-tooltip">
            <p className="calendar-tooltip__title">{event.description.title}</p>
            <div className="calendar-tooltip__body">
              <p className="calendar-tooltip__body-title">
                {event.description.bodyTitle}
              </p>
              <p className="calendar-tooltip__body-text">
                {event.description.body}
              </p>
            </div>
            <p className="calendar-tooltip__footer">
              {event.description.footer}
            </p>
          </div>
        }
      >
        <div
          data-date={event.dateFrom.toLocaleDateString()}
          onMouseEnter={(e) => highlightEvent(e, event)}
          onMouseLeave={stopHighlightEvent}
        >
          <abbr
            aria-label={date.toLocaleDateString()}
            className={cn("react-calendar__tile-body", {
              ["react-calendar__tile-body_primary"]:
                !isIntermediate && event.grade === "PRIMARY",
              ["react-calendar__tile-body_secondary"]:
                !isIntermediate && event.grade === "SECONDARY"
            })}
          >
            {date.getDate()}
          </abbr>
        </div>
      </Tooltip>
    );
  };

  const renderTile = ({ date }: CalendarTileProperties): JSX.Element => {
    if (!events) {
      return (
        <abbr
          aria-label={date.toLocaleDateString()}
          className="react-calendar__tile-body"
        >
          {date.getDate()}
        </abbr>
      );
    }

    let Tile = undefined;

    for (const event of events) {
      if (event.dateFrom.toLocaleDateString() === date.toLocaleDateString()) {
        Tile = renderTileContent(event, date, false);
      } else if (
        event.dateTo &&
        date.getTime() > event.dateFrom.getTime() &&
        date.getTime() < event.dateTo.getTime()
      ) {
        Tile = renderTileContent(event, date, true);
      } else if (
        event.dateTo &&
        event.dateTo.toLocaleDateString() === date.toLocaleDateString()
      ) {
        Tile = renderTileContent(event, date, true);
      }
    }

    return (
      <>
        {Tile || (
          <abbr
            aria-label={date.toLocaleDateString()}
            className="react-calendar__tile-body"
          >
            {date.getDate()}
          </abbr>
        )}
      </>
    );
  };

  const handleDateChange = ({ value, action }: ViewCallbackProperties) => {
    let newYear = new Date();

    if (action === "prev") {
      newYear.setMonth(value.getMonth() - 1);
    } else if (action === "next") {
      newYear.setMonth(value.getMonth() + 1);
    }

    setStartDate(new Date(newYear));
  };

  return (
    <CalendarView
      locale="uk"
      events={events}
      value={startDate}
      minDetail="month"
      maxDetail="month"
      className="calendar"
      onChange={setStartDate}
      tileContent={renderTile}
      activeStartDate={startDate}
      showDoubleView={isDoubleView}
      navigationLabel={renderNavigationLabel}
      onActiveStartDateChange={handleDateChange}
      nextLabel={
        <CommonButton
          image={<LongArrowIcon className="right-arrow" />}
          round={true}
          outlined={true}
        />
      }
      prevLabel={
        <CommonButton
          image={<LongArrowIcon className="left-arrow" />}
          round={true}
          outlined={true}
        />
      }
      next2Label={null}
      prev2Label={null}
    />
  );
};

export default CalendarContainer;
