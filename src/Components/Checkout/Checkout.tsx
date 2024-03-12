import React, { FormEvent, useContext, useRef, useState } from 'react'
// import classes from './Checkout.module.css'
import { styles } from './Checkout.styles'

import { CartContext } from '../../Context/cart-context'

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
	const cartCtx = useContext(CartContext)
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
	}

	return (
		<div>
			{showCheckout && (
				<form className={styles.form} onSubmit={confirmHandler}>
					<div className={styles.formControl}>
						<label className={styles.formControlLabel} htmlFor="name">
							Your Name
						</label>
						<input
							className={`${styles.formControlInput} ${formInputsValidity.name ? '' : styles.invalidInput}`}
							type="text"
							id="name"
							ref={nameInputRef}
						/>
						{!formInputsValidity.name && (
							<p className={`${formInputsValidity.name ? '' : styles.invalidP}`}>Please enter a valid name.</p>
						)}
					</div>
					<div className={styles.formControl}>
						<label className={styles.formControlLabel} htmlFor="street">
							Street
						</label>
						<input
							className={`${styles.formControlInput} ${formInputsValidity.street ? '' : styles.invalidInput}`}
							type="text"
							id="street"
							ref={streetInputRef}
						/>
						{!formInputsValidity.street && (
							<p className={`${formInputsValidity.street ? '' : styles.invalidP}`}>Please enter a valid street.</p>
						)}
					</div>
					<div className={styles.formControl}>
						<label className={styles.formControlLabel} htmlFor="postal">
							Postal Code
						</label>
						<input
							className={`${styles.formControlInput} ${formInputsValidity.postalCode ? '' : styles.invalidInput}`}
							type="text"
							id="postal"
							ref={postalCodeInputRef}
						/>
						{!formInputsValidity.postalCode && (
							<p className={`${formInputsValidity.postalCode ? '' : styles.invalidP}`}>
								Please enter a valid postal code.
							</p>
						)}
					</div>
					<div className={styles.formControl}>
						<label className={styles.formControlLabel} htmlFor="city">
							City
						</label>
						<input
							className={`${styles.formControlInput} ${formInputsValidity.city ? '' : styles.invalidInput}`}
							type="text"
							id="city"
							ref={cityInputRef}
						/>
						{!formInputsValidity.city && (
							<p className={`${formInputsValidity.city ? '' : styles.invalidP}`}>Please enter a valid city.</p>
						)}
					</div>

					<div className={styles.formActions}>
						<button className={styles.formActionsButton} type="button" onClick={props.onCancel}>
							Cancel
						</button>
						<button className={`${styles.formActionsButton}  ${styles.formSubmit}`}>Confirm</button>
					</div>
				</form>
			)}
		</div>
	)
}
