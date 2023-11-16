import React, { useState } from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredPassword, setEnteredPassword] = useState('')

	function handleSubmit(event) {
		console.log('submitrew')
		event.preventDefault()
	}

	function handleEmailChange(event) {
		setEnteredEmail(event.target.value)
	}
	function handlePasswordChange(event) {
		setEnteredPassword(event.target.value)
	}

	return (
		<form onSubmit={handleSubmit} className="loginsignup">
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" onChange={handleEmailChange} value={enteredEmail} />
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={handlePasswordChange}
						value={enteredPassword}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	)
}

export default LoginSignup
