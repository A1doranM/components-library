import React from "react";

import "./switch-button.scss";

export interface SwitchButtonProps {
  active?: boolean;
  onChange?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

const SwitchButton = (props: SwitchButtonProps) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={props.active} onClick={props.onChange} />
      <span className="slider round" />
    </label>
  );
};

export default SwitchButton;
