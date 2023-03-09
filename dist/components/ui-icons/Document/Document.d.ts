import "./document.scss";
export interface DocumentInterface {
    className?: string;
}
declare const Document: ({ className }: DocumentInterface) => JSX.Element;
export default Document;
