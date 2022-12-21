import cn from "classnames";
import React, { useEffect, useState } from "react";

import "./circle-progress-bar.scss";

export interface CircleProgressBarInterface {
  progress: number;
  className?: string;
}

const RADIUS = 27;
const DASHES = 170;

const CircleProgressBar = ({
  progress,
  className
}: CircleProgressBarInterface): JSX.Element => {
  const [percent, setPercent] = useState(0);
  const circumference = Math.PI * (RADIUS * 2);

  useEffect(() => {
    let p = progress;

    if (progress > 100) p = 100;
    if (progress < 0) p = 0;

    const percentToFill = ((100 - p) / 100) * circumference;

    setPercent(Math.round(percentToFill));
  }, [progress, circumference]);

  return (
    <div
      data-testid="circle-progress-bar"
      className={cn("bar-wrapper", className)}
    >
      <div className={"circle-progress-bar"} data-pct={progress}>
        <svg className={"circle-progress-bar__svg"} width="60" height="60">
          <circle
            className={"circle-progress-bar__base"}
            r={RADIUS}
            cx="30"
            cy="30"
            fill="transparent"
            strokeDasharray={DASHES}
            strokeDashoffset="0"
          />
          <circle
            className={"circle-progress-bar__bar"}
            r={RADIUS}
            cx="30"
            cy="30"
            fill="transparent"
            strokeDasharray={DASHES}
            strokeDashoffset={percent}
          />
        </svg>
      </div>
    </div>
  );
};

export default CircleProgressBar;
