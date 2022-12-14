import "./notification.scss";
export interface NotificationInterface {
    text: string;
    className?: string;
    withButton?: boolean;
}
declare const Reminder: ({ text, className, withButton }: NotificationInterface) => JSX.Element;
export default Reminder;
