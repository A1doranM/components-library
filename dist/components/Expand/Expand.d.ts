import "./expand.scss";
export interface ExpandInterface {
    title: string;
    children?: any;
    open?: boolean;
    isLast?: boolean;
    titleClassName?: string;
    isStatic?: boolean;
}
declare const Expand: ({ children, title, open, isLast, titleClassName, isStatic }: ExpandInterface) => JSX.Element;
export default Expand;
