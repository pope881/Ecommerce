import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
	test('renders email input', () => {
		render(
			<BrowserRouter>
				<Newsletter />
			</BrowserRouter>
		)
		const input = screen.getByPlaceholderText('Your email id')
		expect(input).toBeInTheDocument()
		expect(input).toHaveAttribute('type', 'text')
	})
	test('checks if user can pass valid email to test email input field', () => {
		render(
			<BrowserRouter>
				<Newsletter />
			</BrowserRouter>
		)

		const input = screen.getByTestId('email-input')
		fireEvent.change(input, { target: { value: 'test@mail.com' } })
		expect(input).toHaveValue('test@mail.com')
		expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
	})
	test('checks if user can pass invalid email to test email input field', () => {
		render(
			<BrowserRouter>
				<Newsletter />
			</BrowserRouter>
		)

		const input = screen.getByTestId('email-input')
		fireEvent.change(input, { target: { value: 'test' } })
		expect(input).toHaveValue('test')

		const subscribeBtn = screen.getByTestId('subscribeBtn')
		fireEvent.click(subscribeBtn)

		const errorP = screen.getByTestId('error-msg')
		expect(errorP).toBeInTheDocument()
		expect(errorP.textContent).toEqual('Please enter a valid email.')
	})
})
