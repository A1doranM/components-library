import "./clock.scss";
export interface ClockInterface {
    className?: string;
}
declare const Clock: ({ className }: ClockInterface) => JSX.Element;
export default Clock;
