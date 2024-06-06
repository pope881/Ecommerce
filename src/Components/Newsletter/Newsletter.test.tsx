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
	test('checks if user can pass valid email to test email input field and click the subscribe button', () => {
		render(
			<BrowserRouter>
				<Newsletter />
			</BrowserRouter>
		)

		const originalAlert = window.alert
		let alertMessage = ''
		window.alert = message => {
			alertMessage = message
		}

		const input = screen.getByTestId('email-input')
		const button = screen.getByRole('button', { name: 'Subscribe' })
		fireEvent.change(input, { target: { value: 'test@mail.com' } })
		fireEvent.click(button)
		expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
		expect(alertMessage).toBe('You have subscribed to our newsletter!')
		window.alert = originalAlert
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
