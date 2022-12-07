import "./print.scss";
export interface PrintInterface {
    className?: string;
}
declare const Print: ({ className }: PrintInterface) => JSX.Element;
export default Print;
