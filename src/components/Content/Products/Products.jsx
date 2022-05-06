import React, { useContext, useEffect, useState } from 'react'

import { StoreContext } from '../../../store/StoreProvider';

const Products = () => {

    const { products } = useContext(StoreContext)
    const [categories, setCategories] = useState({})
    const [prices, setPrices] = useState({})

    useEffect(() => {
        if (products !== false) {
            cathegorizeProducts();
            calculatePrices();
        }
    }, [products])

    const cathegorizeProducts = async () => {
        if (products !== false) {
            const categories = products?.map(product => product.category)
            const noDoubled = [...new Set(categories)]
            const object = noDoubled.map(category => (
                {
                    "name": category,
                    "totalPrice": 0
                }
            ))
            setCategories(object)
        }
    }

    const calculatePrices = async () => {
        if (products !== false) {
            const summedPrices = Object.keys(categories).map((key) => {
                const object = {
                    "name": categories[key].name,
                    "totalPrice": 0
                }
                products.forEach(product => {
                    if (product.category === categories[key].name) object.totalPrice = object.totalPrice + product.price
                })
                return object
            })
            setPrices(summedPrices)
        }
    }

    const list = Object.keys(prices)?.map((key) => {
        return (
            <li key={key}>
                <div>
                    <h3>Name: {prices[key].name}</h3>
                    <p>Total price: {prices[key].totalPrice}</p>
                </div>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default Products;