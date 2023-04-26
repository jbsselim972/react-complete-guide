import classes from "./Section.module.css";

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
