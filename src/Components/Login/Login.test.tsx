import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Login } from './Login'
import { Provider } from 'react-redux'
import { store } from '../store'

describe('Login', () => {
	test('renders email input', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		)
		const emailInput = screen.getByTestId('login-input-email')
		expect(emailInput).toBeInTheDocument()
		expect(emailInput).toHaveAttribute('type', 'email')
	})
	test('checks if user can pass valid email to test email input field', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		)

		const emailInput = screen.getByTestId('login-input-email')
		fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
		expect(emailInput).toHaveValue('test@test.com')
		expect(screen.queryByTestId('error-msg-login-mail')).not.toBeInTheDocument()
	})
	test('renders passowrd input', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		)
		const passwordInput = screen.getByTestId('login-input-password')
		expect(passwordInput).toBeInTheDocument()
		expect(passwordInput).toHaveAttribute('type', 'password')
	})
	test('checks if user can pass valid password to test password input field', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		)

		const passwordInput = screen.getByTestId('login-input-password')
		fireEvent.change(passwordInput, { target: { value: '0123456789' } })
		expect(passwordInput).toHaveValue('0123456789')
		expect(screen.queryByTestId('error-msg-login-password')).not.toBeInTheDocument()
	})

	test('should have empty inputs when login button is clicked and all inputs are valid', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Login />
				</BrowserRouter>
			</Provider>
		)

		const emailInput = screen.getByTestId('login-input-email')
		const passwordInput = screen.getByTestId('login-input-password')
		const loginButton = screen.getByRole('button', { name: 'Login' })
		fireEvent.change(emailInput, { target: { value: 'joesmith@gmail.com' } })
		fireEvent.change(passwordInput, { target: { value: '0123456789' } })
		fireEvent.click(loginButton)
		expect(passwordInput).toHaveValue('')
		expect(emailInput).toHaveValue('')
	})
})
