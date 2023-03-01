import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    // const [data] = useContext(AuthContext);
    return (
        <nav className='header'>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
                {/* {data.email} */}
            </div>
        </nav>
    );
};

export default Header;