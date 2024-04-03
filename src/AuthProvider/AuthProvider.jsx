import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/Firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const handlerRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const handleGitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    const handleSignOut = () => {
        setLoading(false)
        return signOut(auth)
    }
    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
       })
       return () => {
        unsubscribe()
       }
    },[])
    const authInfo = {
        user,
        loading,
        handlerRegister,
        handleLogin,
        handleGoogleLogin,
        handleGitHubLogin,
        handleSignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;