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
  anchorLinksScrollMargins: {
    top: number;
    left: number;
  };
}

const Navigation = ({
  navLinks,
  className,
  anchorLinksScrollMargins
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

  const handleAnchorNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const element = document.getElementById(e.currentTarget.href.split("#")[1]);

    window.scrollTo({
      top:
        element.offsetTop +
        (anchorLinksScrollMargins?.top ? anchorLinksScrollMargins.top : 0),
      left:
        element.offsetLeft +
        (anchorLinksScrollMargins?.left ? anchorLinksScrollMargins.left : 0),
      behavior: "smooth"
    });
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
                  key={to}
                  href={to}
                  onClick={handleAnchorNavigation}
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
