import React from "react";
import cn from "classnames";

import "./title.scss";

export interface TitleInterface {
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 48;
  weight?: number;
  className?: string;
  children: string;
}

const Title = ({
                 size = 16,
                 weight = 400,
                 className = "",
                 children
               }: TitleInterface): JSX.Element => {
  return (
    <h4
      className={cn(
        "title",
        className,
        `title_size_${size}`,
        `title_weight_${weight}`
      )}
      data-testid="title"
    >
      {children}
    </h4>
  );
};

export default Title;
