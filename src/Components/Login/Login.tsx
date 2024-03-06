import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import classes from './Login.module.css'

import { useNavigate } from 'react-router-dom'

type Credentials = {
	email: string
	password: string
}

type HasBeenEdited = {
	email: boolean
	password: boolean
}

export const Login = () => {
	const [enteredValues, setEnteredValues] = useState<Credentials>({ email: '', password: '' })
	const [didEdit, setDidEdit] = useState<HasBeenEdited>({ email: false, password: false })
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

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()

		if (!formIsValid) {
			setLoginIsValid(true)
			return
		}

		dispatch(authActions.login())
		setEnteredValues({ email: '', password: '' })
		setDidEdit({ email: false, password: false })
		setLoginIsValid(false)
		navigateHandler()
	}

	function handleInputChange(identifier: any, value: any) {
		console.log({ identifier })
		console.log({ value })
		setEnteredValues(prevValues => ({ ...prevValues, [identifier]: value }))
		setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: false }))
	}

	function handleInputBlur(identifier: any) {
		setDidEdit(prevEdit => ({ ...prevEdit, [identifier]: true }))
	}

	function cancelLoginHandler() {
		setEnteredValues({ email: '', password: '' })
		setDidEdit({ email: false, password: false })
		setLoginIsValid(false)
	}

	return (
		<div className={classes.login}>
			<div className={classes['login__text']}>
				<h2>Login</h2>
				<p>
					<i className="fa-solid fa-lock"></i>
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
							onBlur={() => handleInputBlur('email')}
							onChange={event => handleInputChange('email', event.target.value)}
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
							onBlur={() => handleInputBlur('password')}
							onChange={event => handleInputChange('password', event.target.value)}
							placeholder="Password..."
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
