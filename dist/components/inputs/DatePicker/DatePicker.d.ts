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
declare const DatePickerInput: ({ placeholder, className, labelClassName, onChange, name, value }: DatePickerInputInterface) => JSX.Element;
export default DatePickerInput;
