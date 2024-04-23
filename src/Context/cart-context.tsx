import React from 'react'
import type { CartItem } from './CartProvider'
import { AllProduct, allProduct } from '../../public/allProduct'

export type CartContextType = {
	items: CartItem[]
	totalAmount: number
	addItem: (item: CartItem) => void
	removeItem: (item: CartItem) => void
	clearCart: () => void
	allProduct: AllProduct[]
}

const defaultCartContext: CartContextType = {
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: () => {},
	clearCart: () => {},
	allProduct: allProduct,
}

export const CartContext = React.createContext<CartContextType>(defaultCartContext)
