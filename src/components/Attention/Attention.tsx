import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import Title from "../Title";
import MailIcon from "../ui-icons/Mail";
import DocumentIcon from "../ui-icons/Document";
import LongArrowIcon from "../ui-icons/LongArrow";

import "./attention.scss";

export interface IAttention {
  title: string;
  date: string;
  text: string;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  status?: "IMPORTANT" | "NEW" | "OLD";
}

const Attention = ({
  date,
  status = "OLD",
  text,
  title,
  href,
  onClick,
  className
}: IAttention) => {
  const render = () => {
    return (
      <section
        className={cn("attention-box", className, {
          ["attention-box_important"]: status === "IMPORTANT",
          ["attention-box_new"]: status === "NEW",
          ["attention-box_old"]: status === "OLD"
        })}
        onClick={!href && onClick}
      >
        <div className="attention-box__header-section">
          <time dateTime={date}>{date}</time>
          <LongArrowIcon className="attention-box__header-icon" />
        </div>
        <div className="attention-box__content-section">
          {status !== "IMPORTANT" ? (
            <MailIcon className="attention-box__content-icon" />
          ) : (
            <DocumentIcon className="attention-box__content-icon" />
          )}
          <div className="attention-box__text-wrapper">
            <Title className="attention-box__content-title" size={16}>
              {title}
            </Title>
            <p className="attention-box__content-text">{text}</p>
          </div>
        </div>
      </section>
    );
  };

  return href ? (
    <Link to={href} className="attention-box-link" onClick={onClick}>
      {render()}
    </Link>
  ) : (
    render()
  );
};

export default Attention;
