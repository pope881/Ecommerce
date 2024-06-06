import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
	test('renders name input', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)
		const nameInput = screen.getByTestId('form-input-name')
		expect(nameInput).toBeInTheDocument()
		expect(nameInput).toHaveAttribute('type', 'text')
	})
	test('checks if user can pass valid name to test name input field', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)

		const nameInput = screen.getByTestId('form-input-name')
		fireEvent.change(nameInput, { target: { value: 'abc' } })
		expect(nameInput).toHaveValue('abc')
		expect(screen.queryByTestId('error-msg-name')).not.toBeInTheDocument()
	})
	test('renders email input', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)
		const emailInput = screen.getByTestId('form-input-email')
		expect(emailInput).toBeInTheDocument()
		expect(emailInput).toHaveAttribute('type', 'text')
	})
	test('checks if user can pass valid email to test email input field', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)

		const emailInput = screen.getByTestId('form-input-email')
		fireEvent.change(emailInput, { target: { value: 'test@mail.com' } })
		expect(emailInput).toHaveValue('test@mail.com')
		expect(screen.queryByTestId('error-msg-email')).not.toBeInTheDocument()
	})

	test('renders message textArea', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)
		const messageTextArea = screen.getByTestId('form-textarea-message')
		expect(messageTextArea).toBeInTheDocument()
		expect(messageTextArea).toHaveAttribute('name', 'textarea message')
	})
	test('checks if user can pass valid text to test message in textArea field', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)

		const messageTextArea = screen.getByTestId('form-textarea-message')
		fireEvent.change(messageTextArea, { target: { value: 'I am writing with complain' } })
		expect(messageTextArea).toHaveValue('I am writing with complain')
		expect(screen.queryByTestId('error-msg-email')).not.toBeInTheDocument()
	})

	test('Checks contact form successful validation', () => {
		render(
			<BrowserRouter>
				<ContactForm />
			</BrowserRouter>
		)

		const originalAlert = window.alert
		let alertMessage = ''
		window.alert = message => {
			alertMessage = message
		}

		const nameInput = screen.getByTestId('form-input-name')
		const emailInput = screen.getByTestId('form-input-email')
		const messageTextArea = screen.getByTestId('form-textarea-message')
		const confirmButton = screen.getByRole('button', { name: 'Confirm' })
		fireEvent.change(nameInput, { target: { value: 'joe smith' } })
		fireEvent.change(emailInput, { target: { value: 'joesmith@gmail.com' } })
		fireEvent.change(messageTextArea, { target: { value: 'I am writing with complain about' } })
		fireEvent.click(confirmButton)
		expect(nameInput).toHaveValue('')
		expect(emailInput).toHaveValue('')
		expect(messageTextArea).toHaveValue('')
		expect(alertMessage).toEqual('Your message has been sent!')
		window.alert = originalAlert
	})
})
