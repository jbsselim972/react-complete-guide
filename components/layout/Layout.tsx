import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
