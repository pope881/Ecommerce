import React from 'react'
import classes from './Footer.module.css'
import logo from '../Assets/logo-no-background.png'

import { Link } from 'react-router-dom'

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	//   }, [])

	return (
		<div>
			<footer>
				<div className={classes.container}>
					<div className={`${classes.sec} ${classes.aboutus}`}>
						<div className={classes.logo}>
							<Link to="/">
								<img onClick={scrollToTop} src={logo} alt="" />
							</Link>
							<h2>shop4u</h2>
						</div>
						<p className={classes.textOne}>Quality matters. Always.</p>
						<p className={classes.textTwo}>
							We are, a notable fashion ecommerce site, excels in creating a sense of urgency and offering shipping
							incentives with their sassy copy.
						</p>
					</div>
					<div className={`${classes.sec} ${classes.quicklinks}`}>
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
					<div className={`${classes.sec} ${classes.quicklinks}`}>
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
					<div className={`${classes.sec} ${classes.contact}`}>
						<h2>Contact us</h2>
						<ul className={classes.info}>
							<li>
								<span>
									<i class="fa-solid fa-phone"></i>
								</span>
								<p>
									<a href="tel:+48 510 510 510 ">+48 510 510 510</a>
								</p>
							</li>
							<li>
								<span>
									<i class="fa-solid fa-envelope"></i>
								</span>
								<p>
									<a href="mailto:shop4u@gmail.com">shop4u@gmail.com</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className={classes.copyrightText}>
				<p>Copyright @{new Date().getFullYear()} - All rights reserved </p>
			</div>
		</div>
	)
}

export default Footer
