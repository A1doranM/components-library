import cn from "classnames";
import React, { useState } from "react";
import { Router, Routes, Route, NavLink, BrowserRouter } from "react-router-dom";

import "./navigation.scss";

export interface LinkInterface {
  to: string;
  text: string;
  customContent?: any;
  customStyles?: string;
}

export interface NavigationInterface {
  navLinks: Array<LinkInterface>;
  title: string;
  subtitle?: string;
  titleImg?: any;
  titleClass?: string;
  subtitleClass?: string;
  noLogo?: boolean;
}

const Navigation = ({
  navLinks,
  title,
  titleClass,
  subtitle,
  subtitleClass,
  titleImg,
  noLogo
}: NavigationInterface): JSX.Element => {
  const linkStyles = (isActive: boolean, additionalStyles?: string) => {
    return cn(
      "navigation__tab",
      { ["navigation__tab_active"]: isActive },
      additionalStyles
    );
  };

  return (
    <BrowserRouter>
      <section className={cn("navigation", {})}>
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
      </section>
    </BrowserRouter>
  );
};

export default Navigation;
