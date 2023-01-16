import { TooltipInterface } from "./iTooltip";
import "./tooltip.scss";
declare const Tooltip: ({ children, content, show }: TooltipInterface) => JSX.Element;
export default Tooltip;
