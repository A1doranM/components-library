import cn from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";

export interface LinkInterface {
  to: string;
  text: string;
  anchor?: boolean;
  customContent?: any;
  customStyles?: string;
}

export interface NavigationInterface {
  navLinks: Array<LinkInterface>;
  className?: string;
}

const Navigation = ({
  navLinks,
  className
}: NavigationInterface): JSX.Element => {
  const linkStyles = (
    to: string,
    isActive: boolean,
    isAnchor: boolean,
    additionalStyles?: string
  ) => {
    return cn(
      "navigation__tab",
      {
        ["navigation__tab_active"]: isAnchor ? location.hash === to : isActive
      },
      additionalStyles
    );
  };

  return (
    <div className={cn("navigation", className)}>
      <nav className={"navigation__tabs-wrapper"} role="navigation">
        <menu className={"navigation__tabs"}>
          {navLinks.map(
            ({
              to,
              anchor,
              text,
              customContent,
              customStyles
            }: LinkInterface) => {
              return anchor ? (
                <a
                  href={to}
                  className={linkStyles(to, false, true, customStyles)}
                >
                  {customContent || text}
                </a>
              ) : (
                <NavLink
                  to={to}
                  key={to}
                  className={({ isActive }) =>
                    linkStyles(to, isActive, false, customStyles)
                  }
                >
                  {customContent || text}
                </NavLink>
              );
            }
          )}
        </menu>
      </nav>
    </div>
  );
};

export default Navigation;
