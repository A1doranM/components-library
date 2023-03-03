import { InputActionMeta } from "react-select/dist/declarations/src/types";
import "./select.scss";
export interface SelectInputInterface {
    onChange?: (value: {
        label?: string | number;
        value?: string | number;
    }) => void;
    onFieldClick?: () => void;
    onBlur?: () => void;
    onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
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
    menuIsOpen?: boolean;
    asyncSelect?: boolean;
    asyncSelectOptionsLoader?: () => any;
}
declare const SelectInput: ({ name, options, placeholder, onChange, onInputChange, onFieldClick, onBlur, className, styles, menuIsOpen, modalPortalTarget, defaultMenuIsOpen, asyncSelect, asyncSelectOptionsLoader }: SelectInputInterface) => JSX.Element;
export default SelectInput;
