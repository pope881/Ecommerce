import React from 'react'
import type { CartItem } from './CartProvider'

export type CartContextType = {
	items: CartItem[]
	totalAmount: number
	addItem: (item: CartItem) => void
	removeItem: (item: CartItem) => void
	clearCart: () => void
}

const defaultCartContext: CartContextType = {
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
}

export const CartContext = React.createContext<CartContextType>(defaultCartContext)
