import React, { useRef, useState } from 'react'
import classes from './ContactForm.module.css'
const ContactForm = () => {
	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		message: true,
		email: true,
	})

	const nameInputRef = useRef()
	const messageInputRef = useRef()
	const emailInputRef = useRef()

	const hasEmailSign = value => value.includes('@')
	const isTenChars = value => value.trim().length >= 10
	const isThreeChars = value => value.trim().length >= 3

	const confirmSubmitHandler = event => {
		event.preventDefault()

		const enteredName = nameInputRef.current.value
		const enteredMessage = messageInputRef.current.value
		const enteredEmail = emailInputRef.current.value

		const enteredNameIsValid = isThreeChars(enteredName)
		const enteredMessageIsValid = isTenChars(enteredMessage)
		const enteredEmailIsValid = hasEmailSign(enteredEmail)

		setFormInputsValidity({
			name: enteredNameIsValid,
			message: enteredMessageIsValid,
			email: enteredEmailIsValid,
		})

		const formIsValid = enteredNameIsValid && enteredMessageIsValid && enteredEmailIsValid

		if (!formIsValid) {
			return
		}

		nameInputRef.current.value = ''
		messageInputRef.current.value = ''
		emailInputRef.current.value = ''

		setFormInputsValidity({
			name: true,
			message: true,
			email: true,
		})
		alert('Your message has been sent!')
		// navigate('/')
	}

	const cancelSubmitHandler = () => {
		nameInputRef.current.value = ''
		messageInputRef.current.value = ''
		emailInputRef.current.value = ''

		setFormInputsValidity({
			name: true,
			message: true,
			email: true,
		})
	}

	return (
		<section className={classes.contact}>
			<div className={classes['contact-content']}>
				<h2>Contact Us</h2>
				<p>We can't solve your problem if you don't tell us about it !</p>
			</div>

			<div className={classes['contact-container']}>
				<div className={classes['contact-container-contactInfo']}>
					<div className={classes['contact-container-contactInfo-box']}>
						<div className={classes['contact-container-contactInfo-box-icon']}>
							<i class="fa-solid fa-location-dot"></i>
						</div>
						<div className={classes['contact-container-contactInfo-box-text']}>
							<h3>Address</h3>
							<p> Starołęcka Street 33 </p>
							<p> Poznań, Greater Poland</p>
							<p>Poland</p>
						</div>
					</div>
					<div className={classes['contact-container-contactInfo-box']}>
						<div className={classes['contact-container-contactInfo-box-icon']}>
							<i class="fa-solid fa-phone"></i>
						</div>
						<div className={classes['contact-container-contactInfo-box-text']}>
							<h3>Phone</h3>
							<p>510-510-510</p>
						</div>
					</div>
					<div className={classes['contact-container-contactInfo-box']}>
						<div className={classes['contact-container-contactInfo-box-icon']}>
							<i class="fa-solid fa-envelope"></i>
						</div>
						<div className={classes['contact-container-contactInfo-box-text']}>
							<h3>Email</h3>
							<a href="mailto:shopper@gmail.com">shopper@gmail.com</a>
						</div>
					</div>
				</div>
				<div className={classes['contact-container-map']}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9738718838817!2d16.93186871252162!3d52.370893771905806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045aee1edd4ceb%3A0xc03dcd73ba68a0d7!2zU3Rhcm_FgsSZY2thIDMzLCA2MS0zNjEgUG96bmHFhA!5e0!3m2!1spl!2spl!4v1701961446805!5m2!1spl!2spl"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>

				<div className={classes['contact-container-contactForm']}>
					<form onSubmit={confirmSubmitHandler}>
						<h2>Send Message</h2>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<input type="text" required="required" ref={nameInputRef} />
							{formInputsValidity.name ? <span>Name</span> : <span>Name must contains min. 3 characters</span>}
						</div>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<input type="text" required="required" ref={emailInputRef} />
							{formInputsValidity.email ? <span>Email</span> : <span>Email must contains '@'.</span>}
						</div>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<textarea ref={messageInputRef} cols="30" rows="10" required="required"></textarea>
							{formInputsValidity.message ? (
								<span>Message</span>
							) : (
								<span>Message must contains min. 10 characters</span>
							)}
						</div>
						<div className={classes['contact-container-contactForm-actions']}>
							<button type="button" onClick={cancelSubmitHandler}>
								Cancel
							</button>
							<button className={classes.submit}>Confirm</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactForm