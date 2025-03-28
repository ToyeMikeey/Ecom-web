import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (userData) => {
        console.log("Setting user data:", userData); // Log user data when setting
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, setUser: updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
