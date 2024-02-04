import React from 'react'
import classes from './Footer.module.css'
import logoShop from '../Assets/otherImg/logoShop.png'

import { Link } from 'react-router-dom'

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<div>
			<div className={classes['footer']}>
				<div className={classes['footer__container']}>
					<div className={`${classes['footer__section']} ${classes['footer__aboutUs']}`}>
						<div className={classes['footer__logo']}>
							<Link to="/">
								<img onClick={scrollToTop} src={logoShop} alt="company logo" />
							</Link>
						</div>
						<p className={classes['footer__qualityText']}>Quality matters. Always.</p>
						<p className={classes['footer__text']}>
							We are, a notable fashion ecommerce site, excels in creating a sense of urgency and offering shipping
							incentives with their sassy copy.
						</p>
					</div>
					<div className={`${classes['footer__section']} ${classes['footer__quicklinks']}`}>
						<h2>Support</h2>
						<ul>
							<Link to="/about">
								<li onClick={scrollToTop}>About us</li>
							</Link>
							<Link to="/contact">
								<li onClick={scrollToTop}>Contact</li>
							</Link>
							<Link to="/team">
								<li onClick={scrollToTop}>Our team</li>
							</Link>
							<Link to="testimonials">
								<li onClick={scrollToTop}>Testimonials</li>
							</Link>
						</ul>
					</div>
					<div className={`${classes['footer__section']} ${classes['footer__quicklinks']}`}>
						<h2>Shop</h2>
						<ul>
							<Link to="/mens">
								<li>Men</li>
							</Link>
							<Link to="/womens">
								<li>Women</li>
							</Link>
							<Link to="/kids">
								<li>Kids</li>
							</Link>
						</ul>
					</div>
					<div className={`${classes['footer__section']} ${classes['footer__contact']}`}>
						<h2>Contact us</h2>
						<ul className={classes['footer__contactInfo']}>
							<li>
								<span>
									<i className="fa-solid fa-phone"></i>
								</span>
								<p>
									<a href="tel:+48 510 510 510 ">+48 510 510 510</a>
								</p>
							</li>
							<li>
								<span>
									<i className="fa-solid fa-envelope"></i>
								</span>
								<p>
									<a href="mailto:shop4u@gmail.com">shop4u@gmail.com</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={classes.copyrightText}>
				<p>Copyright @{new Date().getFullYear()} - All rights reserved </p>
			</div>
		</div>
	)
}

export default Footer
