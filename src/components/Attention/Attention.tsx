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
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  type?: "important" | "regular";
  viewed?: boolean;
}

const Attention = ({
  date,
  type = "regular",
  viewed,
  text,
  title,
  link,
  onClick,
  className
}: IAttention) => {
  const render = () => {
    return (
      <section
        className={cn("attention-box", className, {
          ["attention-box_important"]: !viewed && type === "important",
          ["attention-box_regular"]: !viewed && type === "regular"
          // ["attention-box_viewed"]: status === "OLD"
        })}
        onClick={!link && onClick}
      >
        <div className="attention-box__header-section">
          <time dateTime={date}>{date}</time>
          <LongArrowIcon className="attention-box__header-icon" />
        </div>
        <div className="attention-box__content-section">
          {type !== "important" ? (
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

  return link ? (
    <Link to={link} className="attention-box-link" onClick={onClick}>
      {render()}
    </Link>
  ) : (
    render()
  );
};

export default Attention;
