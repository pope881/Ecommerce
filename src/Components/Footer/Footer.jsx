import React from 'react'
import './Footer.css'
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
				<div className="container">
					<div className="sec aboutus">
						<div className="logo">
							<Link to="/">
								<img onClick={scrollToTop} src={logo} alt="" />
							</Link>
							<h2>shop4u</h2>
						</div>
						<p className="textOne">Quality matters. Always.</p>
						<p className="textTwo">
							We offers a big range of clothes for all your needs. We have the perfect car to meet your needs.
						</p>
					</div>
					<div className="sec quicklinks">
						<h2>Support</h2>
						<ul>
							<Link to="/about">
								<li onClick={scrollToTop}>About us</li>
							</Link>
							<Link to="/contact">
								<li onClick={scrollToTop}>Contact</li>
							</Link>
							<li>FAQ</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className="sec quicklinks">
						<h2>Shop</h2>
						<ul>
							<Link to="/mens">
								<li>Men</li>
							</Link>
							<Link to="/womens">
								<li>Woman</li>
							</Link>
							<Link to="/kids">
								<li>Kids</li>
							</Link>
						</ul>
					</div>
					<div className="sec contact">
						<h2>Contact us</h2>
						<ul className="info">
							<li>
								<span>
									<i class="fa-solid fa-phone"></i>
								</span>
								<p>
									<a href="tel:+1 234 456 798 ">+48 510 510 510</a>
								</p>
							</li>
							<li>
								<span>
									<i class="fa-solid fa-envelope"></i>
								</span>
								<p>
									<a href="mailto:shop4u@gmail.com">onet@wp.pl</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className="copyrightText">
				<p>Copyright @{new Date().getFullYear()} - All rights reserved </p>
			</div>
		</div>
	)
}

export default Footer
