import "./navigation.scss";
export interface LinkInterface {
    to: string;
    text: string;
    anchor?: boolean;
    customContent?: any;
    customStyles?: string;
}
export interface NavigationInterface {
    navLinks: Array<LinkInterface>;
    className?: string;
    anchorLinksScrollMargins: {
        top: number;
        left: number;
    };
}
declare const Navigation: ({ navLinks, className, anchorLinksScrollMargins }: NavigationInterface) => JSX.Element;
export default Navigation;
