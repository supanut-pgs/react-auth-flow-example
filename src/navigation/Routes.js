import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import HomeScreen from '../features/home/HomeScreen'
import LoginScreen from '../features/login/LoginScreen'
import UserScreen from '../features/user/UserScreen'
import { AuthContext } from '../hooks/useAuthProvider'

export default function Routes() {

    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Switch>

            {/* private routing  */}
            {
                isLoggedIn && (

                    <Switch>
                        <Route path="/user" component={UserScreen} />
                        <Route path="/" component={HomeScreen} />
                    </Switch>



                )
            }

            {/* public routing */}
            {
                !isLoggedIn && (
                    <Switch>
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/" component={LoginScreen} />
                    </Switch>

                )
            }

        </Switch>
    )
}