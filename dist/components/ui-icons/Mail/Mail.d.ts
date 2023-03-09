import "./mail.scss";
export interface MailInterface {
    className?: string;
}
declare const Mail: ({ className }: MailInterface) => JSX.Element;
export default Mail;
