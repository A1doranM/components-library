import cn from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.scss";

export interface LinkInterface {
  to: string;
  text: string;
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
  const linkStyles = (isActive: boolean, additionalStyles?: string) => {
    return cn(
      "navigation__tab",
      { ["navigation__tab_active"]: isActive },
      additionalStyles
    );
  };

  return (
    <div className={cn("navigation", className)}>
      <nav className={"navigation__tabs-wrapper"} role="navigation">
        <menu className={"navigation__tabs"}>
          {navLinks.map(
            ({ to, text, customContent, customStyles }: LinkInterface) => {
              return (
                <NavLink
                  to={to}
                  key={to}
                  className={({ isActive }) =>
                    linkStyles(isActive, customStyles)
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
