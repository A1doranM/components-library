export interface PortalInterface {
    children: Array<JSX.Element> | JSX.Element;
    inlineStyles?: Array<{
        property: string;
        value: string | null;
    }>;
}
