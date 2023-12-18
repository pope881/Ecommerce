import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo-no-background.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="body">
			<footer>
				<div className="container">
					<div className="sec aboutus">
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis aspernatur aut aliquam a et ab! Illo
							porro
						</p>
						<ul className="sci">
							<li>
								<a href="#">
									<i class="fa-brands fa-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa-brands fa-twitter"></i>{' '}
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa-brands fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="fa-brands fa-youtube"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="sec quicklinks">
						<h2>Support</h2>
						<ul>
							<li>
								<a href="#">FAQ</a>
							</li>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Help</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div className="sec quicklinks">
						<h2>Shop</h2>
						<ul>
							<li>
								<a href="#">Men</a>
							</li>
							<li>
								<a href="#">Woman</a>
							</li>
							<li>
								<a href="#">Kids</a>
							</li>
							<li>
								<a href="#">Shoes</a>
							</li>
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
									<a href="tel:+1 234 456 798 ">+1 234 456 798</a>
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
				<div className="copyrightText">
					<p>Copyright @{new Date().getFullYear()} - All rights reserved </p>
				</div>
			</footer>
		</div>
	)
}

export default Footer
