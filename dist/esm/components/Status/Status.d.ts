import "./status.scss";
export interface StatusInterface {
    type: "RECEIVED" | "CANCELED" | "ORDERED" | "ANNUL" | "DRAFT" | "PASSED" | "NOT-PASSED";
    className?: string;
    children?: any;
}
declare const Status: ({ type, className, children }: StatusInterface) => JSX.Element;
export default Status;
