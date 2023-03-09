import "./pencil.scss";
export interface PencilInterface {
    className?: string;
}
declare const Pencil: ({ className }: PencilInterface) => JSX.Element;
export default Pencil;
