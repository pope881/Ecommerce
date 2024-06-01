import { render, screen } from '@testing-library/react'
import { About } from '../../Pages/About'
import { BrowserRouter } from 'react-router-dom'

describe('About', () => {
	test('renders three headings descriptions', () => {
		render(
			<BrowserRouter>
				<About />{' '}
			</BrowserRouter>
		)

		expect(screen.getByText('Online Shopping')).toBeInTheDocument()
		expect(screen.getByText('Happy Clients')).toBeInTheDocument()
		expect(screen.getByText('Countries')).toBeInTheDocument()
	})

	test('renders image', () => {
		render(
			<BrowserRouter>
				<About />
			</BrowserRouter>
		)

		const aboutImage = screen.getByTestId('aboutImage')
		expect(aboutImage).toHaveProperty('alt', 'men with black sunglasses')
	})
})
