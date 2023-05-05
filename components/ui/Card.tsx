import classes from "./Card.module.css";

const Card = ({ children }: React.PropsWithChildren) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
