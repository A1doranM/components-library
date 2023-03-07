import React from "react";
import cn from "classnames";
import { useDropzone } from "react-dropzone";

import "./simple-upload-file.scss";

export interface SimpleUploadFileInterface {
  className?: string;
  text?: string;
  uploadedText?: string;
}

const SimpleUploadFile = ({
                            className,
                            text,
                            uploadedText
                          }: SimpleUploadFileInterface): JSX.Element => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={cn(
        "simple-file-loader",
        files.length && "simple-file-loader_uploaded",
        className
      )}
    >
      <h4 className={"simple-file-loader__title"}>
        {files.length
          ? `${uploadedText || "Файд ключа:"} ${files[0].props.children[0]}`
          : text ||
          "Перетягніть сюди файл ключа або оберіть його на своєму носієві"}
      </h4>
      <h4 className={"simple-file-loader__formats"}>
        {files.length
          ? "Якщо хочете перезавантажите, натиснить на це поле або перетяніть сюди файл"
          : "Підтримуються формати: .jks, .pfx, .pk8, .zs2, .dat"}
      </h4>
      <input {...getInputProps()} />
    </div>
  );
};

export default SimpleUploadFile;
