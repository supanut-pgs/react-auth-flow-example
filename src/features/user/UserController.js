import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext()

export const UserController = ({ children }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                // alert(JSON.stringify(data))
                setUsers(data)
            })
            .catch(err => {

            })
    }, [])

    return (
        <UserContext.Provider value={{
            users
        }}>
            {children}
        </UserContext.Provider>
    )
}