import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true);

    const logout = () => {
        setToken(false);
        alert("Sesión cerrada. El token es ahora FALSE.");
    };

    const login = () => {
        setToken(true);
        alert("Sesión iniciada. El token es ahora TRUE.");
    };

    const contextValue = {
        token,
        logout,
        login
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(UserContext);
};