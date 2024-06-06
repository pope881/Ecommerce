import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductDisplay } from './ProductDisplay'
import { allProduct } from '../../../public/allProduct'
import { Navbar } from '../Navbar/Navbar'
import { Provider } from 'react-redux'
import { store } from '../store'
import { CartProvider } from '../../Context/CartProvider'

describe('ProductDisplay', () => {
	test('Adds an item to the cart', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<CartProvider>
						<Navbar />
						<ProductDisplay product={allProduct[0]} />
					</CartProvider>
				</BrowserRouter>
			</Provider>
		)

		const addButton = screen.getByText('ADD TO CART')
		expect(addButton).toBeInTheDocument()
		const cartItemsCount = screen.getByTestId('cartItemsCount')
		expect(cartItemsCount).toHaveTextContent('0')
		fireEvent.click(addButton)
		expect(cartItemsCount).toHaveTextContent('1')
	})
})
