/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firenase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
    console.log(loading,user)

  const createNewUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const userLogIn = (email,password) =>{
    setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
 
  }

  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }


  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogIn,
    loading
  };

  useEffect(()=>{
  const  unsubscribe =  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  ;
};

export default AuthProvider;
