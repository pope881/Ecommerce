import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Hero } from './Hero'

describe('Hero', () => {
	test('renders button element', () => {
		render(
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		)

		const buttonElement = screen.getByRole('button', { name: 'Check out' })
		expect(buttonElement).toBeInTheDocument
	})

	test('renders images', () => {
		render(
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		)

		const menImage = screen.getByTestId('menImage')
		const womenImage = screen.getByTestId('womenImage')
		expect(menImage).toHaveProperty('alt', 'men dressed in sports clothes')
		expect(womenImage).toHaveProperty('alt', 'young girl dressed in sports clothes')
	})
	test('renders new collections after the button was clicked', () => {
		render(
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		)
	})
})
