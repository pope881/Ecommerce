import React from 'react'
import classes from './ContactForm.module.css'
const ContactForm = () => {
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
					<form action="">
						<h2>Send Message</h2>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<input type="text" name="" required="required" />
							<span>Full name</span>
						</div>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<input type="text" name="" required="required" />
							<span>Email</span>
						</div>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<textarea name="" id="" cols="30" rows="10" required="required"></textarea>
							<span>Type your Message...</span>
						</div>
						<div className={classes['contact-container-contactForm-inputBox']}>
							<input type="submit" name="" value="Send" />
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactForm
