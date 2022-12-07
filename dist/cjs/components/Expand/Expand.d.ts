import "./expand.scss";
export interface ExpandInterface {
    title: string;
    children?: any;
    open?: boolean;
    isLast?: boolean;
}
declare const Expand: ({ children, title, open, isLast }: ExpandInterface) => JSX.Element;
export default Expand;
