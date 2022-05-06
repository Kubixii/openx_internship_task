import { useContext, useEffect, useState } from 'react';

import React from 'react'
import { StoreContext } from '../../../store/StoreProvider';

const Carts = () => {

    const { carts, users, products, isFetched } = useContext(StoreContext)

    const [cartValues, setCartValues] = useState([])
    const [maxValueCart, setMaxValueCart] = useState({})

    useEffect(() => {
        if (isFetched.current === 6) {
            calculateCartsValues()
            setTimeout(() => getMaxValueCart(), 1000)
        }
    }, [isFetched.current])



    const calculateCartsValues = async () => {
        const objectProducts = Object.keys(carts)

        const userIds = objectProducts?.map(index => carts[index].userId)

        const cartProducts = objectProducts?.map(index => carts[index].products)

        const Cart = cartProducts.map((cartProducts, index) => {

            let Cart = {
                "price": 0,
                "userId": userIds[index]
            };

            const productArray = Array.from(products)
            cartProducts.forEach(cartProduct => {
                const productId = cartProduct.productId - 1
                Cart.price += productArray.at(productId).price * cartProduct.quantity
            })
            return Cart
        })
        setCartValues(Cart)
    }

    const getMaxValueCart = async () => {

        const cartsPrices = cartValues.map(cart => cart.price)

        const user = Array.from(users).at(cartValues.userId).name
        while (cartsPrices === []) {
            console.log("HE");
        }
        const maxValue = Math.max(...cartsPrices)
        console.log(maxValue);
        console.log(cartsPrices);
        setMaxValueCart({
            fullName: user.firstname + " " + user.lastname,
            price: maxValue
        })
    }

    return (
        <div>
            <h2>Most valuable cart is worth: {maxValueCart.price}</h2>
            <p>Was created by: {maxValueCart.fullName}</p>
        </div>
    );
}

export default Carts;