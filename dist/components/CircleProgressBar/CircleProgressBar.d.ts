import "./circle-progress-bar.scss";
export interface CircleProgressBarInterface {
    progress: number;
    className?: string;
}
declare const CircleProgressBar: ({ progress, className }: CircleProgressBarInterface) => JSX.Element;
export default CircleProgressBar;
