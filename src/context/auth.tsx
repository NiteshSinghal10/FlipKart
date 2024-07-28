import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({isLoggedIn: false, login: (token: string) => {}, logout: () => {} , setLogInUsername: (username: string) => {}, logInUsername: ''});

export const AuthProvider = (props: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInUsername, setLogInUsername] = useState('');

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{isLoggedIn, setLogInUsername, logInUsername, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}