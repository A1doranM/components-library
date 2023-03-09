import { SelectInputInterface } from "../Select/Select";
import "./autocomplete.scss";
export interface AutocompleteInterface extends Omit<SelectInputInterface, "options"> {
    client: {
        url: string;
        headers?: {};
        parser?: (data: any) => Array<{
            value?: string | number;
            label?: string | number;
        }>;
    };
    dataFieldsNames?: {
        valueFieldName: string;
        labelFieldName: string;
    };
    initialValue?: string;
}
declare const Autocomplete: ({ client, dataFieldsNames, initialValue, ...props }: AutocompleteInterface) => JSX.Element;
export default Autocomplete;
