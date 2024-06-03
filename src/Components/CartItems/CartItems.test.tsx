import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import { CartProvider } from '../../Context/CartProvider'
import { CartItems } from './CartItems'
import { CartContext } from '../../Context/cart-context'
import { allProduct } from '../../../public/allProduct'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

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
	test('should have empty input when submit button is clicked and the input value is valid (5 characters)', async () => {
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
		const originalAlert = window.alert
		let alertMessage = ''
		window.alert = message => {
			alertMessage = message
		}

		const promoCodeInput = screen.getByPlaceholderText('Promo code')
		const promoCodeButton = screen.getByRole('button', { name: 'Submit' })
		fireEvent.change(promoCodeInput, { target: { value: 'abcde' } })
		fireEvent.click(promoCodeButton)

		expect(alertMessage).toBe('Your promo code is valid. Your shipping will be free!')
		window.alert = originalAlert
	})

	const itemsRender = () =>
		render(
			<Provider
				store={{
					...store,
					getState: () => ({ auth: { isAuthenticated: true } }),
				}}>
				<BrowserRouter>
					<CartContext.Provider
						value={{
							items: [
								{
									amount: 100,
									color: 'blue',
									id: 1,
									image: '/abc',
									name: 'abcde',
									price: 1000,
									size: 'large',
								},
							],
							addItem: () => {},
							allProduct: allProduct,
							totalAmount: 1,
							removeItem: () => {},
							clearCart: () => {},
						}}>
						<CartItems />
					</CartContext.Provider>
				</BrowserRouter>
			</Provider>
		)

	test('Checks cart unsuccessful validation', () => {
		itemsRender()
		const originalAlert = window.alert
		let alertMessage = ''
		window.alert = message => {
			alertMessage = message
		}

		const proceedButton = screen.getByTestId('proceedButton')
		fireEvent.click(proceedButton)
		const checkoutSubmit = screen.getByTestId('checkoutSubmit')
		fireEvent.click(checkoutSubmit)

		expect(alertMessage).toEqual('')
		window.alert = originalAlert
	})

	test('Checks cart successful validation', () => {
		itemsRender()
		const originalAlert = window.alert
		let alertMessage = ''
		window.alert = message => {
			alertMessage = message
		}

		const proceedButton = screen.getByTestId('proceedButton')
		fireEvent.click(proceedButton)
		const nameInput = screen.getByTestId('checkoutInputName')
		const streetInput = screen.getByTestId('checkoutInputStreet')
		const postalCodeInput = screen.getByTestId('checkoutInputPostalCode')
		const cityInput = screen.getByTestId('checkoutInputCity')
		const checkoutSubmit = screen.getByTestId('checkoutSubmit')
		fireEvent.change(nameInput, { target: { value: 'Jan' } })
		fireEvent.change(streetInput, { target: { value: 'Krakowska' } })
		fireEvent.change(postalCodeInput, { target: { value: '12345' } })
		fireEvent.change(cityInput, { target: { value: 'Warszawa' } })
		fireEvent.click(checkoutSubmit)

		expect(alertMessage).toEqual('Your order is confirmed!')
		window.alert = originalAlert
	})
})
