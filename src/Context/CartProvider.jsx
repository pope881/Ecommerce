//BEFORE DELETING MODE
import { useReducer } from 'react'
import all_product from '../Components/Assets/all_product'
import CartContext from './cart-context'

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

		const existingCartItemIndex = state.items.findIndex(
			item => item.id === action.item.id && item.size === action.item.size
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
			item => item.id === action.item.id && item.size === action.item.size
		)
		const existingItem = state.items[existingCartItemIndex]
		const updatedTotalAmount = state.totalAmount - existingItem.price
		let updatedItems


		// OD TEGO MIEJSCA JEST BŁAD GDY MAMY TEN SAM SIZE NA ROZNYCH ID
		// W OBREBIE JEDNEGO ID WSZYSTKO DZIALA  NAWET GDY SA ROZNE SEIZE
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id && item.size !== action.item.size)
			console.log(updatedItems)
			// updatedItems = state.items
			// const indexOfObject = state.items.findIndexOf(object => object.id === action.object.id && action.object.size)
			// const updatedItems = [...updatedItems.slice(1, indexOfObject)]
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
		all_product: all_product,
	}

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider
