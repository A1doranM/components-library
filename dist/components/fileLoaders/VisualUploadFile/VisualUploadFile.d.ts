import { Accept } from "react-dropzone";
import "./visual-upload-file.scss";
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
    progress: number;
}
declare const VisualUploadFile: ({ title, backgroundImg, containerClassName, contentClassName, labelClassName, accept, acceptString, maxSize, onLoad, onDelete, progress }: VisualUploadFileInterface) => JSX.Element;
export default VisualUploadFile;
