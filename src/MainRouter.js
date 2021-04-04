import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import AuthCTDetail from './component/AuthUser/AuthCTDetail';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import SearchIngredient from './component/AuthUser/SearchIngredient';
import RandomSelection from './component/AuthUser/SearchIngredient';
import SearchDrinkName from './component/AuthUser/SearchIngredient';


const MainRouter = (props) => {
    return (
        <Router user={props.user}>
            <NavBar user={props.user} handleUserLogout={props.handleUserLogout}/>
                <Switch >
                    <PrivateRoute exact path={"/search-ingredient"} component={SearchIngredient} />
                    <PrivateRoute exact path={"/search-drink-name"} component={SearchDrinkName} />
                    <PrivateRoute exact path={"/random-selection"} component={RandomSelection} />
                    <PrivateRoute exact path="/recipe-detail/:id" component={AuthCTDetail} />
                    <Route exact path="/login" render={(routerProps) => <Login {...routerProps} handleUserLogin={props.handleUserLogin} />} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/" component={Home} />
                </Switch>
        </Router>
    )
}

export default MainRouter
