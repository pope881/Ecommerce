import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../Components/store/auth'

import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'
const LoginSignup = () => {
	// const [enteredEmail, setEnteredEmail] = useState('')
	// const [enteredPassword, setEnteredPassword] = useState('')
	const [enteredValues, setEnteredValues] = useState({ email: '', password: '' })

	const dispatch = useDispatch()
	const navigate = useNavigate()

	function navigateHandler() {
		navigate('/')
	}

	const handleSubmit = event => {
		event.preventDefault()

		dispatch(authActions.login())
		// console.log(enteredEmail, enteredPassword)
		console.log(enteredValues);
		navigateHandler()
	}

	function handleInputChange(identifier, value) {
		setEnteredValues(prevValues => ({ ...prevValues, [identifier]: value }))
	}

	// function handleEmailChange(event) {
	// 	setEnteredEmail(event.target.value)
	// }

	// function handlePasswordChange(event) {
	// 	setEnteredPassword(event.target.value)
	// }

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						// onChange={handleEmailChange}
						onChange={event => handleInputChange('email', event.target.value)}
						// value={enteredEmail}
						value={enteredValues.email}
					/>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						// onChange={handlePasswordChange}
						onChange={event => handleInputChange('password', event.target.value)}
						// value={enteredPassword}
						value={enteredValues.password}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button type="button" className="button button-flat">
					Reset
				</button>
				<button className="button">Login</button>
			</p>
		</form>
	)
}

export default LoginSignup
