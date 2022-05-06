import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/users' >Users</Link></li>
                <li><Link to='/carts' >Carts</Link></li>
                <li><Link to='/products' >Products</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;