import cn from "classnames";
import { useEffect, useRef, useState } from "react";

import { TooltipInterface } from "./iTooltip";

import Portal from "../Portal";

import "./tooltip.scss";

const Tooltip = ({
                   children,
                   content,
                   show,
                   wrapperClassName,
                   contentClassName,
                   positionRegardingToElementId
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
    const element = document.getElementById(positionRegardingToElementId);
    if (element) {
      element.addEventListener("scroll", handleRecalculatePosition);
      element.addEventListener("resize", handleRecalculatePosition);
    } else {
      window.addEventListener("scroll", handleRecalculatePosition);
      window.addEventListener("resize", handleRecalculatePosition);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleRecalculatePosition);
        element.removeEventListener("resize", handleRecalculatePosition);
      } else {
        window.removeEventListener("scroll", handleRecalculatePosition);
        window.removeEventListener("resize", handleRecalculatePosition);
      }
    };
  }, []);

  return (
    <div
      className={cn("tooltip-wrapper", wrapperClassName)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      ref={tooltipWrapperRef}
      data-testid="tooltip"
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
