import "./blank-page.scss";
export interface BlankPageInterface {
    title: string;
    className?: string;
}
declare const BlankPage: ({ title, className }: BlankPageInterface) => JSX.Element;
export default BlankPage;
