import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import { CartProvider } from '../../Context/CartProvider'
import { CartItems } from './CartItems'
import { CartContext } from '../../Context/cart-context'
import { allProduct } from '../../../public/allProduct'

describe('cartItems', () => {
	test('checks proceed button state', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CartProvider>
						<CartItems />
					</CartProvider>
				</BrowserRouter>
			</Provider>
		)

		const proceedButton = screen.getByTestId('proceedButton')
		expect(proceedButton).toBeDisabled()
	})

	test('checks if initial total is $0', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CartProvider>
						<CartItems />
					</CartProvider>
				</BrowserRouter>
			</Provider>
		)

		const cartTotalAmount = screen.getByTestId('cartTotalAmount')
		expect(cartTotalAmount).toHaveTextContent('$0')
	})

	test('checks if there are no cart item rows initially', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CartContext.Provider
						value={{
							items: [],
							addItem: () => {},
							allProduct: allProduct,
							totalAmount: 0,
							removeItem: () => {},
							clearCart: () => {},
						}}>
						<CartItems />
					</CartContext.Provider>
				</BrowserRouter>
			</Provider>
		)

		const cartItemRow = screen.queryByTestId('cartItemRow')
		expect(cartItemRow).not.toBeInTheDocument()
	})
})
