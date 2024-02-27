import React from 'react'
import type { CartItem } from './CartProvider'

type CartContext = {
	items: CartItem[]
	totalAmount: number
	addItem: (item: CartItem) => void
	removeItem: (item: CartItem) => void
	clearCart: () => void
}

const CartContext = React.createContext<CartContext | null>(null)

export default CartContext
