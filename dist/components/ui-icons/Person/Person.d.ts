import "./person.scss";
export interface PersonInterface {
    className?: string;
}
declare const Person: ({ className }: PersonInterface) => JSX.Element;
export default Person;
