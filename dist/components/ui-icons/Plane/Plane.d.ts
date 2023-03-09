import "./plane.scss";
export interface PlaneInterface {
    className?: string;
}
declare const Plane: ({ className }: PlaneInterface) => JSX.Element;
export default Plane;
