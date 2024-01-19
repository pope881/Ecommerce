import React, { useRef, useState } from 'react'
import classes from './Newsletter.module.css'

const Newsletter = () => {
	const [formInputsValidity, setFormInputsValidity] = useState(true)

	const emailInputRef = useRef()

	const hasEmailSign = value => value.includes('@')

	const subscribeHandler = event => {
		event.preventDefault()

		const enteredEmail = emailInputRef.current.value
		const enteredEmailIsValid = hasEmailSign(enteredEmail)
		console.log(enteredEmailIsValid)

		setFormInputsValidity(enteredEmailIsValid)

		const formIsValid = enteredEmailIsValid
		if (!formIsValid) {
			return
		}

		emailInputRef.current.value = ''
		setFormInputsValidity(true)
		alert('You have subscribed to our newsletter!')
		// navigate('/')
	}

	return (
		<div className={classes.newsletter}>
			<h1>Get Exlusive Offers On Your Email</h1>
			<p>Subscribe to our newsletter and stay updated</p>
			<form onSubmit={subscribeHandler}>
				<div
					className={`${classes['newsletter__control']} ${formInputsValidity ? '' : classes['newsletter__invalid']}`}>
					<input type="text" placeholder="Your email id" ref={emailInputRef}></input>
					<button>Subscribe</button>
				</div>
				<div className={`${formInputsValidity ? '' : classes['newsletter__invalid']}`}>
					{!formInputsValidity && <p>Please enter a valid email.</p>}
				</div>
			</form>
		</div>
	)
}

export default Newsletter
