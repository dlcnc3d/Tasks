import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { auth } from "../core/firebase/firebase";

import firebase from "firebase/app";

type State = {
  signUp: (email: string, password: string) => void;
  currentUser: firebase.User;
  setCurrentUser: React.Dispatch<firebase.User>;
};

const AuthContext = React.createContext<State | null>(null);

export const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(
    null
  );

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthData = () => useContext(AuthContext);
