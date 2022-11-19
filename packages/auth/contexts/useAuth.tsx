import * as React from "react";

import { UserInterface } from "../types/user";
import { AuthContextType } from "../types/auth";

const defaultValue: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext<AuthContextType>(defaultValue);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<UserInterface | null>(null);

  function login(user: UserInterface) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
