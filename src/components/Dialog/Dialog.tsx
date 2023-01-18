import React from "react";
import Modal from "react-modal";
import cn from "classnames";

import { CloseIcon, CommonButton, Title } from "components";

import "./dialog.scss";

export interface DialogInterface {
  title: string;
  isOpen: boolean;
  children: JSX.Element;
  onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  afterOpen?: () => void;
  customControls?: (
    onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  ) => JSX.Element;
  acceptLabel?: JSX.Element | string;
  declineLabel?: JSX.Element | string;
  parentElement?: string | HTMLElement;
}

const Dialog = ({
  title,
  isOpen,
  children,
  onAccept,
  onDecline,
  className = "",
  afterOpen,
  customControls,
  acceptLabel = "Зберегти",
  declineLabel = "Скасувати",
  parentElement
}: DialogInterface): JSX.Element => {
  Modal.setAppElement(parentElement || document.querySelector("body")!);

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpen}
      onRequestClose={onDecline}
      className={cn("modal", className)}
      contentLabel={title}
      closeTimeoutMS={300}
    >
      <div className="modal__content" data-testid="dialog">
        <Title children={title} size={24} className="modal__title" />
        <button onClick={onDecline} className="modal__close-btn">
          <CloseIcon />
        </button>
        {children}
        {customControls ? (
          <>{customControls(onAccept, onDecline)}</>
        ) : (
          <div className="modal__controls">
            <CommonButton
              onClick={onDecline}
              label={declineLabel}
              outlined={true}
            />
            <CommonButton onClick={onAccept} label={acceptLabel} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Dialog;
