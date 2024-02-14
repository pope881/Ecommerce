//BEFORE DELETING MODE
import { useReducer } from 'react'
import allProduct from '../Components/Assets/allProduct'
import CartContext from './cart-context'

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.item.id && item.size === action.item.size && item.color === action.item.color
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
			item => item.id === action.item.id && item.size === action.item.size && item.color === action.item.color
		)
		console.log(existingCartItemIndex)
		const existingItem = state.items[existingCartItemIndex]
		console.log(existingItem)
		const updatedTotalAmount = state.totalAmount - existingItem.price
		let updatedItems

		if (existingItem.amount === 1) {
			updatedItems = state.items.filter(
				item => item.id !== action.item.id || item.size !== action.item.size || item.color !== action.item.color
			)
			console.log(updatedItems)
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
			updatedItems = [...state.items]
			updatedItems[existingCartItemIndex] = updatedItem
			console.log(updatedItems)
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

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: 'ADD', item: item })
	}

	const removeItemFromCartHandler = item => {
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

export default CartProvider
