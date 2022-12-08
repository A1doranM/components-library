import "./title.scss";
export interface TitleInterface {
    size?: 10 | 12 | 14 | 16 | 20 | 24 | 32 | 36 | 48;
    weight?: number;
    className?: string;
    children: string;
}
declare const Title: ({ size, weight, className, children }: TitleInterface) => JSX.Element;
export default Title;
