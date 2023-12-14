import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import classes from './Login.module.css'

import { useNavigate } from 'react-router-dom'

const Login = () => {
	// const [enteredEmail, setEnteredEmail] = useState('')
	// const [enteredPassword, setEnteredPassword] = useState('')
	const [enteredValues, setEnteredValues] = useState({ email: '', password: '' })
	const [didEdit, setDidEdit] = useState({ email: false, password: false })
	const [loginIsValid, setLoginIsValid] = useState(false)

	const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@')
	const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 10

	const emailIsValid = enteredValues.email.includes('@')
	const passwordIsValid = enteredValues.password.trim().length >= 10
	const formIsValid = emailIsValid && passwordIsValid

	const dispatch = useDispatch()
	const navigate = useNavigate()

	function navigateHandler() {
		navigate('/')
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (!formIsValid) {
			setLoginIsValid(true)
			return
		}

		dispatch(authActions.login())
		// console.log(enteredEmail, enteredPassword)
		console.log(enteredValues)
		setEnteredValues({ email: '', password: '' })
		setDidEdit({ email: false, password: false })
		setLoginIsValid(false)

		// event.target.reset()
		// setEnteredEmail('')
		// setEnteredPassword('')
		navigateHandler()
	}

	function handleInputChange(identifier, value) {
		setEnteredValues(prevValues => ({ ...prevValues, [identifier]: value }))
		setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: false }))
	}

	function handleInputBlur(identifier) {
		setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: true }))
	}

	// function handleEmailChange(event) {
	// 	setEnteredEmail(event.target.value)
	// }

	// function handlePasswordChange(event) {
	// 	setEnteredPassword(event.target.value)
	// }

	return (
		<div className={classes.login}>
			<form className={classes['login-form']} onSubmit={handleSubmit}>
				<h2>Login</h2>
				<div className={classes['control-row']}>
					{/* <div className="control no-margin"> */}
					<div className={`${classes['control']} ${classes['no-margin']}}`}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder='Email address...'
							// onChange={handleEmailChange}
							onBlur={() => handleInputBlur('email')}
							onChange={event => handleInputChange('email', event.target.value)}
							// value={enteredEmail}
							value={enteredValues.email}
						/>

						<div className={classes['control-error']}>
							{emailIsInvalid && <p>Please enter a valid email address.</p>}
						</div>
					</div>

					<div className={`${classes['control']} ${classes['no-margin']}}`}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							name="password"
							// onChange={handlePasswordChange}
							onBlur={() => handleInputBlur('password')}
							onChange={event => handleInputChange('password', event.target.value)}
							placeholder='Password...'
							// value={enteredPassword}
							value={enteredValues.password}
						/>
						<div className={classes['control-error']}>
							{passwordIsInvalid && <p>Password must contains min. 10 characters.</p>}
						</div>
					</div>
				</div>
				<p className={classes['form-actions']}>
					<button className={classes['button']}>Login</button>
				</p>
				<div className={`${classes['control-error']} ${classes['form']}`}>
					{loginIsValid && <p>All fields are required.</p>}
				</div>
			</form>
		</div>
	)
}

export default Login
