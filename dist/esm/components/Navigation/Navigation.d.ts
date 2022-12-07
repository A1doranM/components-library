import "./navigation.scss";
export interface LinkInterface {
    to: string;
    text: string;
    customContent?: any;
    customStyles?: string;
}
export interface NavigationInterface {
    navLinks: Array<LinkInterface>;
    title: string;
    subtitle?: string;
    titleImg?: any;
    titleClass?: string;
    subtitleClass?: string;
    noLogo?: boolean;
}
declare const Navigation: ({ navLinks, title, titleClass, subtitle, subtitleClass, titleImg, noLogo }: NavigationInterface) => JSX.Element;
export default Navigation;
