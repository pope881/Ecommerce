import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../Components/store/auth'

import './CSS/LoginSignup.css'
import { Link, redirect, useNavigate } from 'react-router-dom'
const LoginSignup = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	function navigateHandler() {
		navigate('/')
	}

	const loginHandler = event => {
		event.preventDefault()

		dispatch(authActions.login())
		navigateHandler()
	}

	return (
		<form onSubmit={loginHandler}>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" />
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
			</div>
			<button>Login</button>
		</form>
	)
}

export default LoginSignup
