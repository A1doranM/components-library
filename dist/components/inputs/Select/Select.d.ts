import { InputActionMeta } from "react-select/dist/declarations/src/types";
import "./select.scss";
export interface SelectInputInterface {
    onChange?: (item: any, name: string) => void;
    onFieldClick?: () => void;
    onBlur?: () => void;
    onInputChange?: (newValue: string, actionMeta: InputActionMeta, name: string) => void;
    options?: Array<{
        value?: string | number;
        label?: string | number;
    }>;
    placeholder?: string;
    className?: string;
    name?: string;
    inputValue?: string;
    styles?: object;
    modalPortalTarget?: HTMLElement | null;
    defaultMenuIsOpen?: boolean;
    menuIsOpen?: boolean;
    asyncSelect?: boolean;
    asyncSelectOptionsLoader?: () => any;
    errClassName?: string;
    withFormik?: boolean;
}
declare const SelectInput: ({ name, inputValue, options, placeholder, onChange, onInputChange, onFieldClick, onBlur, className, styles, menuIsOpen, modalPortalTarget, defaultMenuIsOpen, asyncSelect, asyncSelectOptionsLoader, errClassName, withFormik }: SelectInputInterface) => JSX.Element;
export default SelectInput;
