import "./navigation.scss";
export interface LinkInterface {
    to: string;
    text: string;
    customContent?: any;
    customStyles?: string;
}
export interface NavigationInterface {
    navLinks: Array<LinkInterface>;
    className: string;
}
declare const Navigation: ({ navLinks, className }: NavigationInterface) => JSX.Element;
export default Navigation;
