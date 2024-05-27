import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Item', () => {
	test('shows three footer sections', () => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		)

		expect(screen.getByTestId('itemImage')).toHaveProperty('src', 'http://localhost:3000/abc.svg')
		expect(screen.getByTestId('itemName')).toHaveTextContent('item test')
		expect(screen.getByTestId('oldPrice')).toHaveTextContent('$13')
		expect(screen.getByTestId('newPrice')).toHaveTextContent('$12')
	})
})
