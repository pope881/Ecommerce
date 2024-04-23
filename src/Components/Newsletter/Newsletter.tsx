import { useRef, useState, FormEvent } from 'react'
import { styles } from './Newsletter.styles'
import { WideContent } from '../Layouts/WideContent'

export const Newsletter = (): JSX.Element => {
	const [formInputsValidity, setFormInputsValidity] = useState<boolean>(true)

	const emailInputRef = useRef<HTMLInputElement | null>(null)

	const hasEmailSign = (value: string) => value.includes('@')

	const subscribeHandler = (event: FormEvent) => {
		event.preventDefault()

		const enteredEmail = emailInputRef.current?.value
		const enteredEmailIsValid = hasEmailSign(enteredEmail ?? '')

		setFormInputsValidity(enteredEmailIsValid)

		const formIsValid = enteredEmailIsValid
		if (!formIsValid) {
			return
		}

		if (emailInputRef.current?.value) {
			emailInputRef.current.value = ''
		}

		setFormInputsValidity(true)
		alert('You have subscribed to our newsletter!')
	}

	return (
		<WideContent>
			<div className={styles.newsletter}>
				<h1 className={styles.newsletterH1}>Get Exlusive Offers On Your Email</h1>
				<p className={styles.newsletterP}>Subscribe to our newsletter and stay updated</p>
				<form onSubmit={subscribeHandler} className={styles.newsletterForm}>
					<div className={styles.newsletterControl}>
						<input
							className={styles.newsletterControlInput}
							type="text"
							placeholder="Your email id"
							ref={emailInputRef}></input>
						<button className={styles.newsletterControlButton}>Subscribe</button>
					</div>
					<div>
						{!formInputsValidity && (
							<p className={`${formInputsValidity ? '' : styles.newsletterInvalidP}`}>Please enter a valid email.</p>
						)}
					</div>
				</form>
			</div>
		</WideContent>
	)
}
