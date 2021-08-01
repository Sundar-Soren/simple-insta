import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Profile from './components/Profile'
import { AuthProvider } from './hooks/AuthHooks'


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
