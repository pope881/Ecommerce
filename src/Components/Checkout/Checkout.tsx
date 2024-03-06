import React, { FormEvent, useContext, useRef, useState } from 'react'
import classes from './Checkout.module.css'

import CartContext from '../../Context/cart-context'

type Props = {
	onSubmitPromoCode: () => void
	onCancel: () => void
}

type FormInputValidity = {
	name: boolean
	street: boolean
	city: boolean
	postalCode: boolean
}

export const Checkout = (props: Props): JSX.Element => {
	const cartCtx: any = useContext(CartContext)
	const { totalAmount, clearCart } = cartCtx

	const [formInputsValidity, setFormInputsValidity] = useState<FormInputValidity>({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	})

	const nameInputRef = useRef<HTMLInputElement | null>(null)
	const streetInputRef = useRef<HTMLInputElement | null>(null)
	const postalCodeInputRef = useRef<HTMLInputElement | null>(null)
	const cityInputRef = useRef<HTMLInputElement | null>(null)

	const isEmpty = (value: string) => value.trim() === ''
	const isFiveChars = (value: string) => value.trim().length === 5

	let showCheckout
	if (totalAmount !== 0) {
		showCheckout = true
	} else {
		showCheckout = false
	}

	const confirmHandler = (event: FormEvent) => {
		event.preventDefault()

		const enteredName = nameInputRef.current?.value
		const enteredStreet = streetInputRef.current?.value
		const enteredPostalCode = postalCodeInputRef.current?.value
		const enteredCity = cityInputRef.current?.value

		const enteredNameIsValid = !isEmpty(enteredName ?? '')
		const enteredStreetIsValid = !isEmpty(enteredStreet ?? '')
		const enteredCityIsValid = !isEmpty(enteredCity ?? '')
		const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode ?? '')

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			city: enteredCityIsValid,
			postalCode: enteredPostalCodeIsValid,
		})

		const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid

		if (!formIsValid) {
			return
		}

		if (
			nameInputRef.current?.value &&
			streetInputRef.current?.value &&
			cityInputRef.current?.value &&
			postalCodeInputRef.current?.value
		) {
			nameInputRef.current.value = ''
			streetInputRef.current.value = ''
			cityInputRef.current.value = ''
			postalCodeInputRef.current.value = ''
		}

		setFormInputsValidity({
			name: true,
			street: true,
			city: true,
			postalCode: true,
		})
		props.onSubmitPromoCode()
		alert('Your order is confirmed!')
		clearCart()
		// navigate('/')
	}

	return (
		<div>
			{showCheckout && (
				<form className={classes['form']} onSubmit={confirmHandler}>
					<div className={`${classes['form__control']} ${formInputsValidity.name ? '' : classes.invalid}`}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" ref={nameInputRef} />
						{!formInputsValidity.name && <p>Please enter a valid name.</p>}
					</div>
					<div className={`${classes['form__control']} ${formInputsValidity.street ? '' : classes.invalid}`}>
						<label htmlFor="street">Street</label>
						<input type="text" id="street" ref={streetInputRef} />
						{!formInputsValidity.street && <p>Please enter a valid street.</p>}
					</div>
					<div className={`${classes['form__control']} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
						<label htmlFor="postal">Postal Code</label>
						<input type="text" id="postal" ref={postalCodeInputRef} />
						{!formInputsValidity.postalCode && <p>Please enter a valid postal code.</p>}
					</div>
					<div className={`${classes['form__control']} ${formInputsValidity.city ? '' : classes.invalid}`}>
						<label htmlFor="city">City</label>
						<input type="text" id="city" ref={cityInputRef} />
						{!formInputsValidity.city && <p>Please enter a valid city.</p>}
					</div>

					<div className={classes['form__actions']}>
						<button type="button" onClick={props.onCancel}>
							Cancel
						</button>
						<button className={classes['form__submit']}>Confirm</button>
					</div>
				</form>
			)}
		</div>
	)
}
