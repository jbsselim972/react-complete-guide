import { useContext } from "react";
import AuthContext, { AuthContextProvider } from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const LoginPage: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <AuthContextProvider>
        <MainHeader />
        <main>
          {!authContext.isLoggedIn && <Login />}
          {authContext.isLoggedIn && <Home />}
        </main>
      </AuthContextProvider>
    </>
  );
};

export default LoginPage;
