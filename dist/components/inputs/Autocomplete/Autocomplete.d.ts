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
}
declare const Autocomplete: ({ client, ...props }: AutocompleteInterface) => JSX.Element;
export default Autocomplete;
