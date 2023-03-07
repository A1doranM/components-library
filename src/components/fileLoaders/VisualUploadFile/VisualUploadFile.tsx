import cn from "classnames";
import React, { useMemo, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";

import { BlackEyeIcon } from "components";
import CommonButton from "../../buttons/CommonButton";

import DownloadIcon from "../../../assets/images/icons/download.svg";
import UpdateIcon from "../../../assets/images/icons/update.svg";
import DeleteIcon from "../../../assets/images/icons/delete.svg";
import PdfIcon from "../../../assets/images/icons/icon_pdf.svg";

import "./visual-upload-file.scss";

const ERRORS_TYPES = {
  "file-invalid-type": "Недозволений тип файлу",
  "file-too-large": "Занадто великий файл",
  "to-many-files": "Занадто багато файлів"
};

export interface VisualUploadFileInterface {
  containerClassName?: string;
  contentClassName?: string;
  labelClassName?: string;
  title?: string;
  backgroundImg?: string;
  accept?: Accept;
  acceptString?: string;
  maxSize?: number;
  onLoad?: (acceptFile: any, rejectFile: any) => void;
  onDelete?: () => void;
  onDocumentView?: () => void;
  progress: number;
}

const VisualUploadFile = ({
  title,
  backgroundImg,
  containerClassName,
  contentClassName,
  labelClassName,
  accept,
  acceptString,
  maxSize = 5,
  onLoad,
  onDelete,
  onDocumentView,
  progress = 0
}: VisualUploadFileInterface): JSX.Element => {
  const maxSizeMb = useMemo(() => maxSize * 10 ** 6, [maxSize]);
  const [file, setFile] = useState(null);
  const isInProgress = progress < 100 && progress > 0;

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    maxFiles: 1,
    maxSize: maxSizeMb,
    onDrop: (accepted, rejected) => {
      let acceptedFile = null;
      let rejectedFile = null;
      if (rejected.length) {
        const rejectedItem = rejected[0];
        rejectedFile = {
          ...rejectedItem,
          errors: rejectedItem.errors.map((error) => {
            return {
              code: error.code,
              title: ERRORS_TYPES[error.code]
            };
          })
        };
      }
      if (accepted.length) {
        acceptedFile = Object.assign(accepted[0], {
          preview: URL.createObjectURL(accepted[0])
        });
        setFile(acceptedFile);
      }
      if (typeof onLoad === "function") {
        onLoad(acceptedFile, rejectedFile);
      }
    }
  });

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    setFile(null);
    onDelete();
  };

  const handleDocumentView = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    onDocumentView();
  };

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={cn(
        "load-file",
        {
          ["uploaded-file-container"]: file,
          ["load-file_in-progress"]: isInProgress
        },
        containerClassName
      )}
    >
      {isInProgress && (
        <div
          className={"load-file__progress-indicator"}
          style={{ width: `${progress}%` }}
        />
      )}
      {file && (
        <div className="load-file__buttons-wrapper">
          {file.type === "application/pdf" && (
            <CommonButton
              round={true}
              image={<BlackEyeIcon />}
              outlined={true}
              className="load-file__button"
              onClick={handleDocumentView}
            />
          )}
          <CommonButton
            round={true}
            image={UpdateIcon}
            outlined={true}
            className="load-file__button"
          />
          <CommonButton
            round={true}
            image={DeleteIcon}
            outlined={true}
            onClick={handleDelete}
            className="load-file__button"
          />
        </div>
      )}
      {file && (
        <div className="upload-container">
          <img
            alt="not fount"
            src={file.type === "application/pdf" ? PdfIcon : file?.preview}
            className="uploaded-img"
          />
        </div>
      )}
      <input {...getInputProps()} accept={acceptString} />
      {!file && (
        <div className={cn("load-file__content-wrapper", contentClassName)}>
          <img src={DownloadIcon} alt="download" className={"load-file__img"} />
          {title && (
            <p className={cn("load-file__label", labelClassName)}>{title}</p>
          )}
          {backgroundImg && (
            <img src={backgroundImg} alt="" className="load-file__background" />
          )}
        </div>
      )}
    </div>
  );
};

export default VisualUploadFile;
