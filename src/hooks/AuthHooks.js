import React, { useContext, useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return projectAuth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return projectAuth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return projectAuth.signOut()
    }

    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged(user => {

            setCurrentUser(user)
        })
        return unsubscribe
    }, [])



    const value = {
        currentUser,
        signup,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

