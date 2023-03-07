import React, { useRef, useState } from "react";
import cn from "classnames";

import ReloadIcon from "../../ui-icons/Reload";
import TrashDefaultIcon from "../../ui-icons/TrashDefault";

import CommonButton from "components/buttons/CommonButton";

import DocPreviewIcon from "../../../assets/images/icons/doc_preview.svg";
import DownloadIcon from "../../../assets/images/icons/download.svg";

import "./pdf-upload-file.scss";

export interface PdfUploadFileInterface {
  containerClassName?: string;
  contentClassName?: string;
  labelClassName?: string;
  title?: string;
  backgroundImg?: string;
}

const PdfUploadFile = ({
                         title,
                         backgroundImg,
                         containerClassName,
                         contentClassName,
                         labelClassName
                       }: PdfUploadFileInterface): JSX.Element => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const inputEl = useRef(null);

  const onDocumentDelete = () => {
    setSelectedFile(null);
    inputEl.current.value = "";
  };

  const onDocumentReload = () => {
    inputEl?.current?.click();
  };

  return selectedFile ? (
    <div className={cn("document-view__image-container", containerClassName)}>
      <img
        src={DocPreviewIcon}
        alt="Document preview"
        className="document-view__image"
      />
      <input
        id="load-doc"
        type="file"
        className="load-doc__input"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedFile(event?.target?.files && event?.target?.files[0]);
        }}
        ref={inputEl}
      />
      <div className="document-view__image-buttons-container">
        {/* <CommonButton round outlined image={<BlackEyeIcon />} /> */}
        <CommonButton
          round
          outlined
          image={<ReloadIcon />}
          onClick={onDocumentReload}
        />
        <CommonButton
          round
          outlined
          image={<TrashDefaultIcon />}
          onClick={onDocumentDelete}
        />
      </div>
    </div>
  ) : (
    <div
      className={cn(
        "load-doc",
        { ["uploaded-file-container"]: selectedFile },
        containerClassName
      )}
    >
      {selectedFile && (
        <div className="upload-container">
          <img
            alt="not fount"
            src={URL.createObjectURL(selectedFile)}
            className="uploaded-img"
          />
        </div>
      )}

      <input
        id="load-doc"
        type="file"
        className="load-doc__input"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedFile(event?.target?.files && event?.target?.files[0]);
        }}
        ref={inputEl}
      />
      {!selectedFile && (
        <div className={cn("load-doc__content-wrapper", contentClassName)}>
          <img src={DownloadIcon} alt="download" className={"load-doc__img"} />
          <label
            htmlFor="load-doc"
            className={cn("load-doc__label", labelClassName)}
          >
            {title}
          </label>
          {backgroundImg && (
            <img src={backgroundImg} alt="" className="load-doc__background" />
          )}
        </div>
      )}
    </div>
  );
};

export default PdfUploadFile;
