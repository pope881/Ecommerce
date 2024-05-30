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

	// dm,sd,,ms,md,sd,m,sdm,

	// test('checks if user can pass invalid email to test email input field', () => {
	// 	render(
	// 		<BrowserRouter>
	// 			<ContactForm />
	// 		</BrowserRouter>
	// 	)

	// 	const input = screen.getByTestId('form-input-email')
	// 	fireEvent.change(input, { target: { value: 'test' } })
	// 	expect(input).toHaveValue('test')

	// 	const subscribeBtn = screen.getByTestId('subscribeBtn')
	// 	fireEvent.click(subscribeBtn)

	// 	const errorP = screen.getByTestId('error-msg')
	// 	expect(errorP).toBeInTheDocument()
	// 	expect(errorP.textContent).toEqual('Please enter a valid email.')
	// })
})
