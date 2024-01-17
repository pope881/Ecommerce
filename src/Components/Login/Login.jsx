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

	function cancelLoginHandler() {
		setEnteredValues({ email: '', password: '' })
		setDidEdit({ email: false, password: false })
		setLoginIsValid(false)
	}

	// function handleEmailChange(event) {
	// 	setEnteredEmail(event.target.value)
	// }

	// function handlePasswordChange(event) {
	// 	setEnteredPassword(event.target.value)
	// }

	return (
		<div className={classes.login}>
			<div className={classes['login__text']}>
				<h2>Login</h2>
				<p>
					<i class="fa-solid fa-lock"></i>
				</p>
			</div>
			<form className={classes['login__form']} onSubmit={handleSubmit}>
				<div className={classes['login__controls']}>
					{/* <div className="login__control login__noMargin"> */}
					<div className={`${classes['login__control']} ${classes['login__noMargin']}}`}>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email address..."
							// onChange={handleEmailChange}
							onBlur={() => handleInputBlur('email')}
							onChange={event => handleInputChange('email', event.target.value)}
							// value={enteredEmail}
							value={enteredValues.email}
						/>

						<div className={classes['login__control--error']}>
							{emailIsInvalid && <p>Please enter a valid email address.</p>}
						</div>
					</div>

					<div className={`${classes['login__control']} ${classes['login__noMargin']}}`}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							name="password"
							// onChange={handlePasswordChange}
							onBlur={() => handleInputBlur('password')}
							onChange={event => handleInputChange('password', event.target.value)}
							placeholder="Password..."
							// value={enteredPassword}
							value={enteredValues.password}
						/>
						<div className={classes['login__control--error']}>
							{passwordIsInvalid && <p>Password must contains min. 10 characters.</p>}
						</div>
					</div>
				</div>
				<p className={classes['login__actions']}>
					<button type="button" className={`${classes['login__button']}`} onClick={cancelLoginHandler}>
						Cancel
					</button>
					<button className={`${classes['login__button']} ${classes['login__submit']}`}>Login</button>
				</p>
				<div className={`${classes['login__control--error']} ${classes['form']}`}>
					{loginIsValid && <p>All fields are required.</p>}
				</div>
			</form>
		</div>
	)
}

export default Login
