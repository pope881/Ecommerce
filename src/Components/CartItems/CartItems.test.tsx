import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import { CartProvider } from '../../Context/CartProvider'
import { CartItems } from './CartItems'
import { CartContext } from '../../Context/cart-context'
import { allProduct } from '../../../public/allProduct'

describe('CartItems', () => {
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

	test('renders promo code input', () => {
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
		const promoCodeInput = screen.getByTestId('promocode-input')
		expect(promoCodeInput).toBeInTheDocument()
		expect(promoCodeInput).toHaveAttribute('type', 'text')
	})
	test('checks if user can pass valid promo code to test promo code input field', () => {
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

		const promoCodeInput = screen.getByTestId('promocode-input')
		fireEvent.change(promoCodeInput, { target: { value: 'abcde' } })
		expect(promoCodeInput).toHaveValue('abcde')
		expect(screen.queryByTestId('error-msg-name')).not.toBeInTheDocument()
	})
	test('should have empty input when submit button is clicked and the input value is valid (5 characters)', () => {
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

		const promoCodeInput = screen.getByPlaceholderText('Promo code')
		const promoCodeButton = screen.getByRole('button', { name: 'Submit' })
		fireEvent.change(promoCodeInput, { target: { value: 'abcde' } })
		fireEvent.click(promoCodeButton)
		expect(promoCodeInput).toHaveValue('')
	})
})
 