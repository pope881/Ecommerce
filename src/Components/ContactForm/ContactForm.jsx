import React from 'react'
import classes from './ContactForm.module.css'
const ContactForm = () => {
	return (
		<section className={classes.contact}>
			<div className={classes['contact-content']}>
				<h2>Contact Us</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione eius blanditiis suscipit accusamus,
					deleniti asperiores, obcaecati,
				</p>
			</div>
			<div className={classes['contact-container']}>
				<div className={classes['contact-container-contactInfo']}>
					<div className={classes['contact-container-contactInfo-box']}>
						<div className={classes['contact-container-contactInfo-box-icon']}>
							<i class="fa-solid fa-location-dot"></i>
						</div>
						<div className={classes['contact-container-contactInfo-box-text']}>
							<h3>Address</h3>
							<p>4671 Sugar Camp Road, </p>
							<p> Owatonna,Minesota,</p>
							<p>55060</p>
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
							<p>ewk@wp.pl</p>
						</div>
					</div>
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
