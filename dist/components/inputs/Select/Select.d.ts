import "./select.scss";
export interface SelectInputInterface {
    onChange?: (value: any) => void;
    onBlur?: () => void;
    options?: Array<{
        value?: string | number;
        label?: string | number;
    }>;
    placeholder?: string;
    className?: string;
    name?: string;
    styles?: object;
    modalPortalTarget?: HTMLElement | null;
}
declare const SelectInput: ({ name, options, placeholder, onChange, onBlur, className, styles, modalPortalTarget }: SelectInputInterface) => JSX.Element;
export default SelectInput;
