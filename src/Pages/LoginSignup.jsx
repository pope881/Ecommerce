import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../Components/store/auth'

import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
	const dispatch = useDispatch()

	const loginHandler = event => {
		event.preventDefault()

		dispatch(authActions.login())
	}

	return (
		<form onSubmit={loginHandler} className="loginsignup">
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" />
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" />
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<Link to='/'>
					<button className="button">Login</button>
				</Link>
			</p>
		</form>
	)
}

export default LoginSignup
