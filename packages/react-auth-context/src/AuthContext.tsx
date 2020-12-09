import React, { createContext, FC, useContext, useEffect, useState } from 'react';

export interface AuthService {
  loginWithEmail: <T>(email: string, password: string) => Promise<T>;
  checkAuth: <T>() => Promise<T | null>;
  logout: () => Promise<void>;
}

type User = unknown;

interface State {
  user: User | null;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
}

interface Actions {
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<State & Actions>({
  user: null,
  isLoggedIn: false,
  isLoggingIn: false,

  loginWithEmail: async () => {},
  logout: async () => {},
});

export const AuthConsumer = AuthContext.Consumer;

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('useAuth requires <AuthProvider>');
  auth.logout;
  return auth;
};

interface Props {
  service: AuthService;
}

export const AuthProvider: FC<Props> = ({ children, service }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  useEffect(() => {
    service.checkAuth()
      .then(setUser)
      .finally(() => setIsLoggingIn(false));
  }, [service]);

  const loginWithEmail = async (email: string, password: string) => {
    setIsLoggingIn(true);
    try {
      setUser(await service.loginWithEmail(email, password));
    } catch (err) {
      throw err;
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = async () => {
    await service.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoggingIn,
        loginWithEmail,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
