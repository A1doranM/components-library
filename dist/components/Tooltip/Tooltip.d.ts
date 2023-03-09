import { TooltipInterface } from "./iTooltip";
import "./tooltip.scss";
declare const Tooltip: ({ children, content, show, wrapperClassName, contentClassName, positionRegardingToElementId }: TooltipInterface) => JSX.Element;
export default Tooltip;
