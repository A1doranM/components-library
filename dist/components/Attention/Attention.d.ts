import React from "react";
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
declare const Attention: ({ date, status, text, title, href, onClick, className }: IAttention) => JSX.Element;
export default Attention;
