import React, { useState } from "react";
import cn from "classnames";

import DownloadIcon from "../../../assets/images/icons/download.svg";

import "./visual-upload-file.scss";

export interface VisualUploadFileInterface {
  className?: string;
  title?: string;
  backgroundImg?: string;
}

const VisualUploadFile = ({
  title,
  backgroundImg,
  className
}: VisualUploadFileInterface): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div
      className={cn(
        "load-file",
        { ["uploaded-file-container"]: selectedImage },
        className
      )}
    >
      {selectedImage && (
        <div className={"upload-container"}>
          <img
            alt="not fount"
            src={URL.createObjectURL(selectedImage)}
            className={"uplaoded-img"}
          />
        </div>
      )}

      <input
        id="load-file"
        type="file"
        className={"load-file__input"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSelectedImage(event?.target?.files && event?.target?.files[0]);
        }}
      />
      {!selectedImage && (
        <div className={"load-file__content-wrapper"}>
          <img src={DownloadIcon} alt="download" className={"load-file__img"} />
          <label htmlFor="load-file" className={"load-file__label"}>
            {title}
          </label>
          {backgroundImg && (
            <img
              src={backgroundImg}
              alt=""
              className={"load-file__background"}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VisualUploadFile;
