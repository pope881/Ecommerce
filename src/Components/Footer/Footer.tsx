import React from 'react'
import { styles } from './Footer.styles'
import { Link } from 'react-router-dom'
const logoShop = require('../Assets/otherImg/logoShop.png')

export const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<div>
			<div className={styles.footer}>
				<div className={styles.footerContainer}>
					<div className={styles.footerAboutUs}>
						<div className={styles.footerLogo}>
							<Link to="/">
								<img className={styles.footerAboutUsImg} onClick={scrollToTop} src={logoShop} alt="company logo" />
							</Link>
						</div>
						<p className={styles.footerQualityText}>Quality matters. Always.</p>
						<p className={styles.footerText}>
							We are, a notable fashion ecommerce site, excels in creating a sense of urgency and offering shipping
							incentives with their sassy copy.
						</p>
					</div>
					<div className={styles.footerQuicklinks}>
						<h2 className={styles.footerSectionH2}>Support</h2>
						<ul>
							<Link className={styles.footerQuicklinksUlA} to="/about">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									About us
								</li>
							</Link>
							<Link className={styles.footerQuicklinksUlA} to="/contact">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									Contact
								</li>
							</Link>
							<Link className={styles.footerQuicklinksUlA} to="/team">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									Our team
								</li>
							</Link>
							<Link className={styles.footerQuicklinksUlA} to="testimonials">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									Testimonials
								</li>
							</Link>
						</ul>
					</div>
					<div className={styles.footerQuicklinks}>
						<h2 className={styles.footerSectionH2}>Shop</h2>
						<ul>
							<Link className={styles.footerQuicklinksUlA} to="/men">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									Men
								</li>
							</Link>
							<Link className={styles.footerQuicklinksUlA} to="/women">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									Women
								</li>
							</Link>
							<Link className={styles.footerQuicklinksUlA} to="/kids">
								<li className={styles.footerQuicklinksUlLi} onClick={scrollToTop}>
									Kids
								</li>
							</Link>
						</ul>
					</div>
					<div className={styles.footerContactInfo}>
						<h2 className={styles.footerSectionH2}>Contact us</h2>
						<ul>
							<li className={styles.footerContactInfoLi}>
								<span className={styles.footerContactInfoLiSpan}>
									<i className="fa-solid fa-phone"></i>
								</span>
								<p>
									<a className={styles.footerContactInfoLiA} href="tel:+48 510 510 510 ">
										+48 510 510 510
									</a>
								</p>
							</li>
							<li className={styles.footerContactInfoLi}>
								<span className={styles.footerContactInfoLiSpan}>
									<i className="fa-solid fa-envelope"></i>
								</span>
								<p>
									<a className={styles.footerContactInfoLiA} href="mailto:shop4u@gmail.com">
										shop4u@gmail.com
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.copyrightText}>
				<p>Copyright @{new Date().getFullYear()} - All rights reserved </p>
			</div>
		</div>
	)
}
