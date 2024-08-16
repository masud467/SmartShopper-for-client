import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext()
const auth = getAuth(app)
const googleProvider= new GoogleAuthProvider()
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

       // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // getToken(currentUser.email);
        // saveUser(currentUser);
        console.log(currentUser);
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);

    const authInfo={
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        setLoading,
        user

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;