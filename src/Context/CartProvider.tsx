//BEFORE DELETING MODE
import { useReducer } from 'react'
import { allProduct } from '../../public/allProduct'
import { CartContext } from './cart-context'
import React from 'react'

export type CartItem = {
	id: number
	name: string
	amount: number
	price: number
	image: string
	size: string
	color: string
}

type AddAction = {
	item: CartItem
	type: 'ADD'
}

type RemoveAction = {
	item: CartItem
	type: 'REMOVE'
}

type ClearAction = {
	type: 'CLEAR'
}

type CartAction = AddAction | RemoveAction | ClearAction

type State = {
	items: CartItem[]
	totalAmount: number
}

const defaultCartState = {
	items: [],
	totalAmount: 0,
}
const cartReducer = (state: State, action: CartAction) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

		const existingCartItemIndex = state.items.findIndex(
			(item: CartItem) =>
				item.id === action.item.id && item.size === action.item.size && item.color === action.item.color
		)
		const existingCartItem = state.items[existingCartItemIndex]
		let updatedItems

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			}
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		} else {
			updatedItems = state.items.concat(action.item)
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}
	if (action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex(
			(item: CartItem) =>
				item.id === action.item.id && item.size === action.item.size && item.color === action.item.color
		)
		const existingItem = state.items[existingCartItemIndex]
		const updatedTotalAmount = state.totalAmount - existingItem.price
		let updatedItems

		if (existingItem.amount === 1) {
			updatedItems = state.items.filter(
				(item: CartItem) =>
					item.id !== action.item.id || item.size !== action.item.size || item.color !== action.item.color
			)
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}

	if (action.type === 'CLEAR') {
		return defaultCartState
	}

	return defaultCartState
}

export const CartProvider = (props: { children: React.ReactNode }) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

	const addItemToCartHandler = (item: CartItem) => {
		dispatchCartAction({ type: 'ADD', item: item })
	}

	const removeItemFromCartHandler = (item: CartItem) => {
		dispatchCartAction({ type: 'REMOVE', item: item })
	}

	const clearCartHandler = () => {
		dispatchCartAction({ type: 'CLEAR' })
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler,
		allProduct: allProduct,
	}

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
