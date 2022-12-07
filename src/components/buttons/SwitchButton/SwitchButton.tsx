import React from "react";
import cn from "classnames";

import "./switch-button.scss";

export interface SwitchButtonProps {
  active?: boolean;
  onChange?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  className?: string;
}

const SwitchButton = ({ active, onChange, className }: SwitchButtonProps) => {
  return (
    <label className={cn("switch", className)}>
      <input type="checkbox" checked={active} onClick={onChange} />
      <span className="slider round" />
    </label>
  );
};

export default SwitchButton;
