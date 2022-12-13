import React, { useState } from "react";
import cn from "classnames";

import BlackPlusIcon from "assets/images/icons/plus.svg";
import WhitePlusIcon from "assets/images/icons/plus-white.svg";

import "./expand.scss";

export interface ExpandInterface {
  title: string;
  children?: any;
  open?: boolean;
  isLast?: boolean;
  titleClassName?: string;
  isStatic?: boolean;
  className?: string;
}

const Expand = ({
  children,
  title,
  open = false,
  isLast = false,
  titleClassName,
  isStatic = false,
  className
}: ExpandInterface): JSX.Element => {
  const [isOpen, setOpen] = useState(open);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <section
      className={cn(
        "expand",
        {
          ["expand_last"]: isLast
        },
        className
      )}
    >
      <h2
        className={cn(
          "expand__header",
          {
            ["expand_active"]: isOpen
          },
          { ["expand_static"]: isStatic },
          titleClassName
        )}
        onClick={handleToggle}
      >
        {title}
      </h2>
      <div
        className={cn("expand__content", {
          ["expand_static-content"]: isStatic
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default Expand;
