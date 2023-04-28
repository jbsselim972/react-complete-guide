import { FC, Fragment, PropsWithChildren } from "react";
import MainHeader from "./MainHeader";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
