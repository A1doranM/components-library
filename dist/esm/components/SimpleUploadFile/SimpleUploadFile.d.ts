import "./simple-upload-file.scss";
export interface SimpleUploadFileInterface {
    className?: string;
    text?: string;
    uploadedText?: string;
}
declare const SimpleUploadFile: ({ className, text, uploadedText, }: SimpleUploadFileInterface) => JSX.Element;
export default SimpleUploadFile;
