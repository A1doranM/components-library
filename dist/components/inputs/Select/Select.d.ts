import "./select.scss";
export interface SelectInputInterface {
    onChange?: (value: any) => void;
    onFieldClick?: () => void;
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
    defaultMenuIsOpen?: boolean;
}
declare const SelectInput: ({ name, options, placeholder, onChange, onFieldClick, onBlur, className, styles, modalPortalTarget, defaultMenuIsOpen }: SelectInputInterface) => JSX.Element;
export default SelectInput;
