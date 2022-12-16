import React from "react";
import Modal from "react-modal";
import cn from "classnames";

import { CloseIcon, CommonButton, Title } from "components";

import "./dialog.scss";

export interface StatusInterface {
  className?: string;
  title: string;
  child: JSX.Element;
  acceptLabel?: string;
  declineLabel?: string;
  afterOpen?: Function;
  onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isOpen: boolean;
}

const Dialog = ({
  className = "",
  title,
  acceptLabel = "Скасувати",
  declineLabel = "Зберегти",
  onAccept,
  onDecline,
  child,
  isOpen,
  afterOpen
}: StatusInterface): JSX.Element => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      zIndex: 1000,
      borderRadius: 0,
      border: "none",
      backgroundColor: "#F5F5F5"
    }
  };

  Modal.setAppElement(document.querySelector("body")!);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpen}
        onRequestClose={onDecline}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={300}
      >
        <div className={cn("wrapper", className)}>
          <div className={"content"}>
            <Title children={title} size={24} className={"title"} />
            <button onClick={onDecline} className={"close"}>
              <CloseIcon />
            </button>
            {child}
            <div className={"decision-buttons"}>
              <CommonButton
                onClick={onDecline}
                label={acceptLabel}
                outlined={true}
              />
              <CommonButton onClick={onAccept} label={declineLabel} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Dialog;
