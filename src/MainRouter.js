import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';

const MainRouter = () => {
    return (
        <Router>
            <NavBar/>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/home" component={Home} />
                </Switch>
        </Router>
    )
}

export default MainRouter
