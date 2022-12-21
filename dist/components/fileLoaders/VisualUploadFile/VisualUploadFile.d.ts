import "./visual-upload-file.scss";
export interface VisualUploadFileInterface {
    containerClassName?: string;
    contentClassName?: string;
    labelClassName?: string;
    title?: string;
    backgroundImg?: string;
}
declare const VisualUploadFile: ({ title, backgroundImg, containerClassName, contentClassName, labelClassName }: VisualUploadFileInterface) => JSX.Element;
export default VisualUploadFile;
