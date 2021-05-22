import React from 'react'

export const LoginContext = React.createContext()

export const LoginController = ({ children }) => {
    return (
        <LoginContext.Provider value={{
            name: "Toy"
        }}>
            {children}
        </LoginContext.Provider>
    )
}