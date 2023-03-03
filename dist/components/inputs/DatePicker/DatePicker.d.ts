import { ReactDatePickerProps } from "react-datepicker";
import "./datepicker.scss";
import "react-datepicker/dist/react-datepicker.css";
export interface DatePickerInputInterface extends ReactDatePickerProps {
    placeholder?: string;
    className?: string;
    labelClassName?: string;
    onChange: (date: Date) => void;
    name?: string;
    value?: string;
    withFormik?: boolean;
    errClassName?: string;
}
declare const DatePickerInput: ({ placeholder, className, labelClassName, onChange, name, value, withFormik, errClassName, ...props }: DatePickerInputInterface) => JSX.Element;
export default DatePickerInput;
