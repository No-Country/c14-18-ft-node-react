'use client'

import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userCredentials, setUserCredentials] = useState({})

    const login = (credentials) => {
        setIsLoggedIn(true);
        setUserCredentials(credentials);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userCredentials', credentials);
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUserCredentials(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userCredentials');
      };

    return(
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userCredentials }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
      throw new Error('useContext must be used within a ContextProvider')
    }
  
    return context
};