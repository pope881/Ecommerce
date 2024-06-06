import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Footer', () => {
	test('Renders footer section', () => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		)

		const supportSection = screen.getByTestId('supportSection')
		expect(supportSection).toHaveTextContent('Support')
	})
})
