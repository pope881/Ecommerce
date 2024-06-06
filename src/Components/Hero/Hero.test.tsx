import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Hero } from './Hero'
import '@testing-library/dom'

describe('Hero', () => {
	test('Renders button element', () => {
		render(
			<BrowserRouter>
				<Hero />
			</BrowserRouter>
		)

		const buttonElement = screen.getByRole('button', { name: 'Check out' })
		expect(buttonElement).toBeInTheDocument
	})

	test('Renders images', () => {
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
})
