import "./alert.scss";
export interface AlertInterface {
    className?: string;
}
declare const Alert: ({ className }: AlertInterface) => JSX.Element;
export default Alert;
