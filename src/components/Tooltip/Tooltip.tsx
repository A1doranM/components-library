import cn from "classnames";
import { useEffect, useRef, useState } from "react";

import { TooltipInterface } from "./iTooltip";

import { Portal } from "../index";

import "./tooltip.scss";

const Tooltip = ({
  children,
  content,
  show,
  wrapperClassName,
  contentClassName
}: TooltipInterface) => {
  const [active, setActive] = useState(show);
  const tooltipWrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  const handleRecalculatePosition = () => {
    active && calcTooltipPosition();
  };

  const calcTooltipPosition = () => {
    const wrapper = tooltipWrapperRef.current;
    const tooltip = tooltipRef.current;

    if (tooltip && wrapper) {
      const wrapperCoords = wrapper.getBoundingClientRect();
      const wrapperTopCorner = wrapperCoords.top + window.scrollY;
      const wrapperLeftCorner = wrapperCoords.left + window.scrollX;

      tooltip.style.top = `${wrapperTopCorner}px`;
      tooltip.style.left = `${
        wrapperLeftCorner -
        Math.ceil(tooltip.offsetWidth / 2) +
        Math.ceil(wrapper.offsetWidth / 2)
      }px`;
      tooltip.style.transform = `translateY(calc(-100% - 5px))`;
    }
  };

  useEffect(() => {
    calcTooltipPosition();
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", handleRecalculatePosition);
    window.addEventListener("resize", handleRecalculatePosition);

    return () => {
      window.removeEventListener("scroll", handleRecalculatePosition);
      window.removeEventListener("resize", handleRecalculatePosition);
    };
  }, []);

  return (
    <div
      className={cn("tooltip-wrapper", wrapperClassName)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      ref={tooltipWrapperRef}
    >
      {children}
      {(active || show) && (
        <Portal>
          <div className={cn("tooltip", contentClassName)} ref={tooltipRef}>
            <div className="tooltip__content">{content}</div>
            <div className="tooltip__square" />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
