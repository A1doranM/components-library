import "./lock.scss";
export interface LockInterface {
    className?: string;
}
declare const Lock: ({ className }: LockInterface) => JSX.Element;
export default Lock;
