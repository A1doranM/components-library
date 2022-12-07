import React, { useState } from "react";
import cn from "classnames";

import "./expand.scss";

export interface ExpandInterface {
  title: string;
  children?: any;
  open?: boolean;
  isLast?: boolean;
  titleClassName?: string;
}

const Expand = ({
  children,
  title,
  open = false,
  isLast = false,
  titleClassName
}: ExpandInterface): JSX.Element => {
  const [isOpen, setOpen] = useState(open);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <section
      className={cn("expand", {
        ["expand_last"]: isLast
      })}
    >
      <h2
        className={cn(
          "expand__header",
          {
            ["expand_active"]: isOpen
          },
          titleClassName
        )}
        onClick={handleToggle}
      >
        {title}
      </h2>
      <p className={cn("expand__content")}>{children}</p>
    </section>
  );
};

export default Expand;
