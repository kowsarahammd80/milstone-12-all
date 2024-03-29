import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

 

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  
  const logIn = (email, password) => {
    setLoading(true)
     return signInWithEmailAndPassword(auth , email, password);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUser = (userInfo) => {
      return updateProfile(auth.currentUser, userInfo)
  }

  useEffect(() => {

    const unsubscribe =onAuthStateChanged(auth, currentUser => {

       setUser(currentUser)
       setLoading(false)

    });
    return () => {
      return unsubscribe;
    }

  },[])


 const authInfo = {

    createUser,
    logIn,
    logOut,
    updateUser,
    user,
    loading
    
 } 


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;