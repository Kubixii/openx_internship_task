import React, { createContext, useEffect, useRef, useState } from 'react'

import Request from '../helpers/request';

export const StoreContext = createContext(null);

const CARTS_ENDPOINT = '/carts';
const USERS_ENDPOINT = '/users'
const PRODUCTS_ENDPOINT = '/products'

const StoreProvider = ({ children }) => {

    const isFetched = useRef(0)

    const [carts, setCarts] = useState(false)
    const [users, setUsers] = useState(false)
    const [products, setProducts] = useState(false)


    useEffect(() => {
        if (isFetched.current === 0) {
            fetchCarts()
            fetchUsers()
            fetchProducts()
        }
    }, [])

    const changeIsFetched = async () => isFetched.current = isFetched.current + 1

    const fetchCarts = async () => {
        const { data } = await Request.get(CARTS_ENDPOINT)
        setCarts(data)
        changeIsFetched()
    }

    const fetchUsers = async () => {
        const { data } = await Request.get(USERS_ENDPOINT)
        setUsers(data)
        changeIsFetched()
    }

    const fetchProducts = async () => {
        const { data } = await Request.get(PRODUCTS_ENDPOINT)
        setProducts(data)
        changeIsFetched()
    }

    return (
        <StoreContext.Provider value={{
            carts,
            users,
            products,
            isFetched
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;