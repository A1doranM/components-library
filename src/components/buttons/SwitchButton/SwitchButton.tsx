import React, {ChangeEvent} from "react";

import "./switch-button.scss";

export interface SwitchButtonProps {
  active?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SwitchButton = (props: SwitchButtonProps) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={props.active} onClick={() => props.onChange}/>
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;
