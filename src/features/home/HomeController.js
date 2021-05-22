import React from 'react'
import { useHistory } from 'react-router'

export const HomeContext = React.createContext()

export const HomeController = ({ children }) => {

    const history = useHistory();

    const gotoUserScreen = () => {
        history.push("/user")
    }

    return (
        <HomeContext.Provider value={{
            gotoUserScreen
        }}>
            {children}
        </HomeContext.Provider>
    )
}