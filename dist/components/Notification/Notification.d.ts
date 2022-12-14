import "./notification.scss";
export interface NotificationInterface {
    text: string;
    className?: string;
    withButton?: boolean;
    warning?: boolean;
}
declare const Reminder: ({ text, className, withButton, warning }: NotificationInterface) => JSX.Element;
export default Reminder;
