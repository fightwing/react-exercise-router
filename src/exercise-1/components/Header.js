import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';

class Header extends React.Component{
    render(){
        return (
        <BrowserRouter >
            <div className="header">
            <ul>
                <li>
                    <Link to={"/about-us"}>About Us</Link>
                </li>
                <li>
                    <Link to={"/my-profile"}>My Profile</Link>
                </li>

                <li>
                    <Link to={"/"}>Home</Link>
                </li>

            </ul>
                <Route exact path={'/'} component={Home}></Route>
                <Route  path={'/my-profile'} component={MyProfile}></Route>
                <Route  path={'/about-us'} component={AboutUs}></Route>
            </div>

        </BrowserRouter>
        )
    }
}
export default Header;

