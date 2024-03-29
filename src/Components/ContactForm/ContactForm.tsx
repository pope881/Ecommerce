import React, { FormEvent, useRef, useState } from 'react'
import { styles } from './ContactForm.styles'
import { motion } from 'framer-motion'

type FormInputValidity = {
	name: boolean
	message: boolean
	email: boolean
}

export const ContactForm = () => {
	const [clickInput, setClickInput] = useState<boolean | null>(false)

	const [formInputsValidity, setFormInputsValidity] = useState<FormInputValidity>({
		name: true,
		message: true,
		email: true,
	})

	const nameInputRef = useRef<HTMLInputElement | null>(null)
	const messageInputRef = useRef<HTMLTextAreaElement | null>(null)
	const emailInputRef = useRef<HTMLInputElement | null>(null)

	const hasEmailSign = (value: string) => value.includes('@')
	const isTenChars = (value: string) => value.trim().length >= 10
	const isThreeChars = (value: string) => value.trim().length >= 3

	const confirmSubmitHandler = (event: FormEvent) => {
		event.preventDefault()
		setClickInput(true)

		const enteredName = nameInputRef.current?.value
		const enteredMessage = messageInputRef.current?.value
		const enteredEmail = emailInputRef.current?.value

		const enteredNameIsValid = isThreeChars(enteredName ?? '')
		const enteredMessageIsValid = isTenChars(enteredMessage ?? '')
		const enteredEmailIsValid = hasEmailSign(enteredEmail ?? '')

		setFormInputsValidity({
			name: enteredNameIsValid,
			message: enteredMessageIsValid,
			email: enteredEmailIsValid,
		})

		const formIsValid = enteredNameIsValid && enteredMessageIsValid && enteredEmailIsValid

		if (!formIsValid) {
			return
		}

		if (nameInputRef.current?.value && messageInputRef.current?.value && emailInputRef.current?.value) {
			nameInputRef.current.value = ''
			messageInputRef.current.value = ''
			emailInputRef.current.value = ''
		}

		setFormInputsValidity({
			name: true,
			message: true,
			email: true,
		})
		setClickInput(false)
		alert('Your message has been sent!')
	}

	const cancelSubmitHandler = () => {
		if (nameInputRef.current?.value && messageInputRef.current?.value && emailInputRef.current?.value) {
			nameInputRef.current.value = ''
			messageInputRef.current.value = ''
			emailInputRef.current.value = ''
		}

		setFormInputsValidity({
			name: true,
			message: true,
			email: true,
		})
		setClickInput(false)
	}

	return (
		<section className={styles.contact}>
			<motion.div
				initial={{ opacity: 1, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className={styles.contactHeading}>
				<h4 className={styles.contactHeadingH4}>Contact</h4>
				<h1 className={styles.contactHeadingH1}>Contact Us</h1>
				<hr className={styles.contactHeadingHr} />
				<p className={styles.contactHeadingP}>We can't solve your problem if you don't tell us about it !</p>
			</motion.div>

			<div className={styles.contactContainer}>
				<div className={styles.contactInfo}>
					<div className={styles.contactInfoBox}>
						<motion.div
							animate={{ scale: [0.5, 2, 2, 1, 1], rotate: [0, 90, 270, 270, 0] }}
							transition={{ duration: 1, delay: 1.6 }}
							className={styles.contactIcon}>
							<i className="fa-solid fa-location-dot"></i>
						</motion.div>
						<div className={styles.contactInfoText}>
							<h3 className={styles.contactInfoTextH3}>Address</h3>
							<p className={styles.contactInfoTextP}> Starołęcka Street 33 </p>
							<p className={styles.contactInfoTextP}> Poznań, Poland</p>
						</div>
					</div>
					<div className={styles.contactInfoBox}>
						<motion.div
							className={styles.contactIcon}
							animate={{ scale: [0.5, 2, 2, 1, 1], rotate: [0, 90, 270, 270, 0] }}
							transition={{ duration: 1, delay: 2.7 }}>
							<i className="fa-solid fa-phone"></i>
						</motion.div>
						<div className={styles.contactInfoText}>
							<h3 className={styles.contactInfoTextH3}>Phone</h3>
							<p className={styles.contactInfoTextP}>+48 510 510 510</p>
						</div>
					</div>
					<div className={styles.contactInfoBox}>
						<motion.div
							className={styles.contactIcon}
							animate={{ scale: [0.5, 2, 2, 1, 1], rotate: [0, 90, 270, 270, 0] }}
							transition={{ duration: 1, delay: 3.8 }}>
							<i className="fa-solid fa-envelope"></i>
						</motion.div>
						<div className={styles.contactInfoText}>
							<h3 className={styles.contactInfoTextH3}>Email</h3>
							<a className={styles.contactInfoTextA} href="mailto:shop4u@gmail.com">
								shop4u@gmail.com
							</a>
						</div>
					</div>
				</div>
				<div>
					<iframe
						className={styles.contactMapContainerIframe}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9738718838817!2d16.93186871252162!3d52.370893771905806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045aee1edd4ceb%3A0xc03dcd73ba68a0d7!2zU3Rhcm_FgsSZY2thIDMzLCA2MS0zNjEgUG96bmHFhA!5e0!3m2!1spl!2spl!4v1701961446805!5m2!1spl!2spl"
						allowFullScreen
						loading="eager"></iframe>
				</div>

				<div className={styles.contactForm}>
					<form onSubmit={confirmSubmitHandler}>
						<h2 className={styles.contactFormH2}>Send Message</h2>
						<div className={styles.contactInputBox}>
							<input
								onClick={() => setClickInput(true)}
								className={styles.contactInputBoxInput}
								//  required="required"
								type="text"
								ref={nameInputRef}
							/>
							{formInputsValidity.name ? (
								<span className={styles.contactInputBoxSpan(clickInput === true)}>Name</span>
							) : (
								<span className={styles.contactInputBoxSpan(clickInput === true)}>
									Name must contains min. 3 characters
								</span>
							)}
						</div>
						<div className={styles.contactInputBox}>
							<input
								onClick={() => setClickInput(true)}
								className={styles.contactInputBoxInput}
								type="text"
								// required="required"
								ref={emailInputRef}
							/>
							{formInputsValidity.email ? (
								<span className={styles.contactInputBoxSpan(clickInput === true)}>Email</span>
							) : (
								<span className={styles.contactInputBoxSpan(clickInput === true)}>Email must contains '@'.</span>
							)}
						</div>
						<div className={styles.contactInfoBox}>
							<textarea
								onClick={() => setClickInput(true)}
								className={styles.contactInputBoxTextarea}
								// required="required"
								ref={messageInputRef}
								cols={30}
								rows={8}></textarea>
							{formInputsValidity.message ? (
								<span className={styles.contactInputBoxSpan(clickInput === true)}>Message</span>
							) : (
								<span className={styles.contactInputBoxSpan(clickInput === true)}>
									Message must contains min. 10 characters
								</span>
							)}
						</div>
						<div className={styles.contactFormActions}>
							<button className={styles.contactFormActionsButton} type="button" onClick={cancelSubmitHandler}>
								Cancel
							</button>
							<button className={`${styles.contactFormActionsSubmit} ${styles.contactFormActionsButton}`}>
								Confirm
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
