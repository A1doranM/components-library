import "./expand.scss";
export interface ExpandInterface {
    title: string;
    children?: any;
    open?: boolean;
    isLast?: boolean;
    titleClassName?: string;
    isStatic?: boolean;
    className?: string;
}
declare const Expand: ({ children, title, open, isLast, titleClassName, isStatic, className }: ExpandInterface) => JSX.Element;
export default Expand;
