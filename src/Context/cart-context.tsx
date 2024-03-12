import React from 'react'
import type { CartItem } from './CartProvider'

type CartContext = {
	items: CartItem[]
	totalAmount: number
	addItem: (item: CartItem) => void
	removeItem: (item: CartItem) => void
	clearCart: () => void
}

const defaultCartContext: CartContext = {
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
}

export const CartContext = React.createContext<CartContext>(defaultCartContext)
