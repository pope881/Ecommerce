import React from 'react'
import classes from './Footer.module.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes['footer-logo']}>
				<img src={footer_logo} alt="" />
				<Link to="">
					<p>SHOPPER</p>
				</Link>
			</div>
			<ul className={classes['footer-links']}>
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/offices">
					<li>Offices</li>
				</Link>
				<Link to="/contact">
					<li>Contact</li>
				</Link>
			</ul>
			{/* <div className="footer-social-icon">
				<div className="footer-icons-container">
					<img src={instagram_icon} alt="" />
				</div>
				<div className="footer-icons-container">
					<img src={pintester_icon} alt="" />
				</div>
				<div className="footer-icons-container">
					<img src={whatsapp_icon} alt="" />
				</div>
			</div> */}
			<div className={classes['footer-copyright']}>
				<hr />
				<p>Copyright @{new Date().getFullYear()} - All rights reserved </p>
			</div>
		</div>
	)
}

export default Footer
