import React, { useEffect, useState } from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setLoggedIn] = useState(
        localStorage.getItem("LOGGED_IN") === "true"
    )

    useEffect(() => {
        localStorage.setItem("LOGGED_IN", isLoggedIn)
    }, [isLoggedIn])

    const handleLogin = () => {
        setLoggedIn(true)
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }


    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            handleLogin,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}