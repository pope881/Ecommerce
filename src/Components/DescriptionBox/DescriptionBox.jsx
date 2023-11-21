import React from 'react'
import classes from './DescriptionBox.module.css'
const DescriptionBox = () => {
	return (
		<div className={classes['descriptionbox']}>
			<div className={classes['descriptionbox-navigator']}>
				<div className={classes['descriptionbox-nav-box']}>Description</div>
				<div className={`${classes['descriptionbox-nav-box']} ${classes['fade']}`}>Reviews (122)</div>
			</div>
			<div className={classes['descriptionbox-description']}>
				<p>
					An e-commerce website is an online platform that facilitates that buying and selling of products or services
					over the Internet. It serves as a virtual marketplace where businesses and individuals can showcase their
					products, interact with customers and conduct transactions without the need for a physical presence.
					E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global
					reach their offer.
				</p>
				<p>
					E-commerce websites typically display products or services along with detailed descriptions, images, prices
					and any available variations (e.g sizes, colors). Each product usually has its own dedicated page with
					relevant information
				</p>
			</div>
		</div>
	)
}

export default DescriptionBox
