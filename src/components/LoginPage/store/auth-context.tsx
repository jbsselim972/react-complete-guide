import { createContext } from "react";

interface AuthContextData {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
