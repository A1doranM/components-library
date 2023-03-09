import React from "react";
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
declare const Attention: ({ date, type, viewed, text, title, link, onClick, className }: IAttention) => JSX.Element;
export default Attention;
