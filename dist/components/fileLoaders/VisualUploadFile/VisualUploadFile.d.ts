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
    onDocumentView?: () => void;
    progress: number;
    loadedFile?: any;
}
declare const VisualUploadFile: ({ title, backgroundImg, containerClassName, contentClassName, labelClassName, accept, acceptString, maxSize, onLoad, onDelete, onDocumentView, progress, loadedFile }: VisualUploadFileInterface) => JSX.Element;
export default VisualUploadFile;
