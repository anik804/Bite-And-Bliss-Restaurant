import axios from "axios";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.init";
import { AuthContext } from "./AuthContext";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser);
      setLoading(false);

      // jwt related task krbo
      if(currentUser?.email){
        const userData ={email: currentUser.email};
        axios.post('https://bite-and-bliss-server-side.vercel.app/jwt',userData,{
          withCredentials: true
        }).then(res =>{
          console.log(res.data)
        })
        .catch(error =>{
          console.log(error);
        })
      }







      console.log('use in the auth state',currentUser)

    });
    return () =>{
      unsubscribe();
    }
  },[])


  const authInfo = {
    loading,
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
