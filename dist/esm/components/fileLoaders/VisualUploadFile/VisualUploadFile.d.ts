import "./visual-upload-file.scss";
export interface VisualUploadFileInterface {
    className?: string;
    title?: string;
    backgroundImg?: string;
}
declare const VisualUploadFile: ({ title, backgroundImg, className }: VisualUploadFileInterface) => JSX.Element;
export default VisualUploadFile;
