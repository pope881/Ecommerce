import { render, fireEvent, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../../Context/CartProvider'
import { Provider } from 'react-redux'
import { store } from '../store'
import App from '../../App'

describe('Navbar Component', () => {
	test('Navbar renders correctly', () => {
		render(
			<BrowserRouter>
				<CartProvider>
					<Provider store={store}>
						<Navbar />
					</Provider>
				</CartProvider>
			</BrowserRouter>
		)

		expect(screen.getByAltText('company logo')).toBeInTheDocument()
		expect(screen.getByTestId('navbarAuthButton')).toHaveTextContent('Login')
		expect(screen.getByTestId('cartItemsCount')).toBeInTheDocument()
	})

	test('Navbar auth button behavior', () => {
		const { getByTestId } = render(
			<BrowserRouter>
				<CartProvider>
					<Provider store={store}>
						<Navbar />
					</Provider>
				</CartProvider>
			</BrowserRouter>
		)

		fireEvent.click(getByTestId('navbarAuthButton'))
	})

	test('Navbar links navigation', () => {
		render(<App />)
		const navMen = screen.getByTestId('navMen')
		const navWomen = screen.getByTestId('navWomen')
		const navKids = screen.getByTestId('navKids')

		fireEvent.click(navMen)
		expect(screen.getByTestId('shopCategory_men')).toBeInTheDocument()
		fireEvent.click(navWomen)
		expect(screen.getByTestId('shopCategory_women')).toBeInTheDocument()
		fireEvent.click(navKids)
		expect(screen.getByTestId('shopCategory_kids')).toBeInTheDocument()
	})
})
