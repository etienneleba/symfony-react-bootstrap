import React, {Component} from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
import Releases from './Releases';

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/releases"}> Releases </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Redirect exact from="/" to="/releases" />
                    <Route path="/releases" component={Releases} />
                </Switch>
            </div>
        )
    }
}

export default Home;
