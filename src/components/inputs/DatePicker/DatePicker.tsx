import { ForwardedRef, forwardRef, useState } from "react";
import uk from "date-fns/locale/uk";
import DatePicker, { registerLocale } from "react-datepicker";
import { getMonth, getYear, subDays, addDays } from "date-fns";

import { CalendarIcon, LongArrowIcon } from "components";

import "./datepicker.scss";

import "react-datepicker/dist/react-datepicker.css";

export interface DatePickerInputInterface {
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  onChange: (date: Date) => void;
  name?: string;
  value?: string;
}

registerLocale("uk", uk);

const DatePickerInput = ({
  placeholder,
  className = "",
  labelClassName = "",
  onChange,
  name,
  value
}: DatePickerInputInterface): JSX.Element => {
  const [startDate, setStartDate] = useState<any>(null);
  const [isYearView, setIsYearView] = useState(false);
  const [isMonthPicker, setMonthPicker] = useState(false);

  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
  ];

  const handleDateChange = (date: Date) => {
    setStartDate(() => {
      onChange(date);
      return date;
    });
    setMonthPicker(false);
  };

  const handleChangeToYearView = () => {
    setIsYearView(true);
    setMonthPicker(false);
  };

  const handleChangeToMonthView = () => {
    setIsYearView(false);
    setMonthPicker(true);
  };

  const handleSelectAllDates = () => {
    setIsYearView(false);
    setMonthPicker(false);
  };

  const DatePickerInput = forwardRef(
    (
      { value, onClick, onChange }: any,
      ref: ForwardedRef<HTMLInputElement>
    ) => (
      <>
        <input
          className="input-wrapper__input"
          onClick={onClick}
          onChange={onChange}
          ref={ref}
          value={value}
          name={name}
          placeholder=" "
        />
        <label
          htmlFor={name}
          className={`input-wrapper__label ${labelClassName}`}
        >
          {placeholder}
        </label>
      </>
    )
  );

  return (
    <div
      className={`input-wrapper
        datepicker-wrapper
        ${className}
      `}
    >
      <CalendarIcon className="datepicker-img" />
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        placeholderText={""}
        excludeDates={[new Date(), subDays(new Date(), -5)]}
        highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        className="datepicker"
        customInput={<DatePickerInput />}
        calendarClassName="calendar"
        locale="uk"
        showYearPicker={isYearView}
        showMonthYearPicker={isMonthPicker}
        dateFormat="dd.MM.yyyy"
        onSelect={handleSelectAllDates}
        shouldCloseOnSelect={!isYearView && !isMonthPicker}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="datapicker__header-info">
            <div className="datapicker__date-wrapper">
              <button
                className={`datepicker__date-format ${
                  !isYearView && "datepicker__active-format"
                } 
              `}
                onClick={handleChangeToMonthView}
              >
                {months[getMonth(date)]}
              </button>
              <button
                className={`datepicker__date-format
                ${isYearView && "datepicker__active-format"}
              `}
                onClick={handleChangeToYearView}
              >
                {getYear(date)}
              </button>
            </div>
            <div className="datepicker__btns-container">
              <button
                onClick={isYearView ? decreaseYear : decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="datepicker__btn
                datepicker__prew-btn"
              >
                <LongArrowIcon className="datepicker__btn-img" />
              </button>
              <button
                onClick={isYearView ? increaseYear : increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="datepicker__btn datepicker__next-btn"
              >
                <LongArrowIcon className="datepicker__btn-img" />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default DatePickerInput;
