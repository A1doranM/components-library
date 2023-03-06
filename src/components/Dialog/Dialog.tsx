import React from "react";
import Modal from "react-modal";
import cn from "classnames";

import Title from "../Title";
import CloseIcon from "assets/images/icons/cancel.svg";
import IconButton from "../buttons/IconButton";

import "./dialog.scss";

export interface DialogInterface extends Modal.Props {
  children: any;
  className?: string;
  overlayClassName?: string;
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Dialog = ({
  children,
  className,
  overlayClassName,
  onClose,
  ...props
}: DialogInterface): JSX.Element => {
  return (
    <Modal
      {...props}
      isOpen
      onRequestClose={onClose}
      className={cn("react-modal", className)}
      overlayClassName={cn("react-modal-overlay", overlayClassName)}
      ariaHideApp={false}
      bodyOpenClassName="overflow-hidden"
      preventScroll={true}
    >
      <div className={"react-modal__wrapper"}>
        <IconButton
          icon={CloseIcon}
          className={"react-modal__close-btn"}
          alt="close"
          onClick={onClose}
        />
        <div className={"react-modal__body"}>{children}</div>
      </div>
    </Modal>
  );
};

export default Dialog;
