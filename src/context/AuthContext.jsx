import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const auth = getAuth(app)

    //register
    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login 
    const loginWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // on state change 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe()
    },[])

    // logout 
    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        loader,
        loginWithEmailPass,
        registerWithEmailPass,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;