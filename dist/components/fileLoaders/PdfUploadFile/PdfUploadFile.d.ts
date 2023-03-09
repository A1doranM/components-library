import "./pdf-upload-file.scss";
export interface PdfUploadFileInterface {
    containerClassName?: string;
    contentClassName?: string;
    labelClassName?: string;
    title?: string;
    backgroundImg?: string;
}
declare const PdfUploadFile: ({ title, backgroundImg, containerClassName, contentClassName, labelClassName }: PdfUploadFileInterface) => JSX.Element;
export default PdfUploadFile;
