import "./expand.scss";
export interface ExpandInterface {
    title: string;
    children?: any;
    open?: boolean;
    isLast?: boolean;
    titleClassName?: string;
}
declare const Expand: ({ children, title, open, isLast, titleClassName }: ExpandInterface) => JSX.Element;
export default Expand;
