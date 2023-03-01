import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
// const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [data, setData] = useState({ email: 'rukon shiem' })


    const authInfo = { data };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;