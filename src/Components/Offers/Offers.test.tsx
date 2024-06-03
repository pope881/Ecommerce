import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Offers } from './Offers'

describe('Offers', () => {
	test('renders heading, paragraph and button', () => {
		render(
			<BrowserRouter>
				<Offers />
			</BrowserRouter>
		)

		const heading = screen.getByText('Exclusive Offers For Woman')
		const paragraph = screen.getByText('ONLY ON BEST SELLERS PRODUCTS')
		const button = screen.getByText('Check now')
		expect(heading).toBeInTheDocument()
		expect(paragraph).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})

	test('renders image', () => {
		render(
			<BrowserRouter>
				<Offers />
			</BrowserRouter>
		)

		const offersImage = screen.getByTestId('offersImage')
		expect(offersImage).toHaveProperty('alt', 'woman dressed jeans and black t-shirt')
	})
})
