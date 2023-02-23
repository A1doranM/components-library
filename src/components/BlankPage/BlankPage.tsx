import cn from "classnames";

import HumanIcon from "assets/images/icons/human.svg";

import "./blank-page.scss";

export interface BlankPageInterface {
  title: string;
  className?: string;
}

const BlankPage = ({ title, className }: BlankPageInterface): JSX.Element => {
  return (
    <section className={cn("blank-page", className)}>
      <img src={HumanIcon} alt={title} className="blank-page__image" />
      <h2 className="blank-page__title">{title}</h2>
    </section>
  );
};

export default BlankPage;
