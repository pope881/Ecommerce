import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
	let cart = {}
	for (let index = 0; index < all_product.length + 1; index++) {
		cart[index] = 0
	}
	return cart
}

const ShopContextProvider = props => {
	const [cartItems, setCartItems] = useState(getDefaultCart())

	const addToCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
	}
	console.log(cartItems)
	// console.log(all_product);

	const removeFromCart = itemId => {
		setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
	}

	const getTotalCartItems = () => {
		let totalItem = 0
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalItem += cartItems[item]
			}
		}
		return totalItem
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let item_info = all_product.find(product => product.id === Number(item))
				totalAmount += item_info.new_price * cartItems[item]
			}
		}
		return totalAmount
	}

	const contextValue = {getTotalCartItems, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount }
	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
export default ShopContextProvider
