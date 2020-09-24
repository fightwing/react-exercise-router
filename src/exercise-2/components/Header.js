import React from 'react';
import {BrowserRouter,Route,Link, Redirect} from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Products from './Products';
import ProductDetails from './ProductDetails';

class Header extends React.Component{
    render(){
        return (<BrowserRouter >
            <div className="header">
            <ul>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/my-profile">My Profile</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Products">Products</Link>
                </li>

            </ul>
                <Route exact path='/' component={Home}></Route>
                <Route path='/my-profile' component={MyProfile}></Route>
                <Route path='/about-us' component={AboutUs}></Route>
                <Route path="/Products" component={Products}></Route>
                <Route path="/products/:id" component={ProductDetails}></Route>
                <Route path="/goods" component={Products}></Route> 
                <Route component={Home} />
            </div>

        </BrowserRouter>)
    }
}
export default Header;

