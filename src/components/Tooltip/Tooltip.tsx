import { useEffect, useRef, useState } from "react";

import { TooltipInterface } from "./iTooltip";

import { Portal } from "../index";

import "./tooltip.scss";

const Tooltip = ({ children, content, show }: TooltipInterface) => {
  const [active, setActive] = useState(false);
  const tooltipWrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
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

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      ref={tooltipWrapperRef}
    >
      {children}
      {(active || show) && (
        <Portal>
          <div className="tooltip" ref={tooltipRef}>
            <div className="tooltip__content">{content}</div>
            <div className="tooltip__square" />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
