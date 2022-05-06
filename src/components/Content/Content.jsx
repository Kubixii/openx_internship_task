import { Route, Routes } from 'react-router-dom';

import Carts from './Carts/Carts';
import Products from './Products/Products';
import React from 'react'
import Users from './Users/Users';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/users' element={<Users />} />
                <Route path='/carts' element={<Carts />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </div>
    );
}

export default Content;