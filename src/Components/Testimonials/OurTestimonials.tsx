import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import classes from './OurTestimonials.module.css'
import { testimonialData } from '../Assets/mockData/mockData'

type Settings = {
	autoplay: boolean
	autoplaySpeed: number
	infinite: boolean
	speed: number
	slidesToShow: number
	slidesToScroll: number
}

const SETTINGS: Settings = {
	autoplay: true,
	autoplaySpeed: 2500,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
}

export const OurTestimonials = (): JSX.Element => {
	return (
		<div className={classes.testimonials}>
			<div className={classes['testimonials_headerText']}>
				<h4>testimonials</h4>
				<h1>What Our Customers Say</h1>
				<hr />
				<p>
					We are always super happy when we receive positive feedback, and we are constantly amazed by the demand for
					our fabrics with orders coming from all corners of the globe.
				</p>
			</div>
			<div className={classes['testimonials__items']}>
				<Slider {...SETTINGS}>
					{testimonialData.map(d => (
						<div key={d.name} className={classes['testimonials__item']}>
							<div className={classes['testimonials__itemTop']}>
								<img src={d.img} alt="person expressing opinions" className={classes.img} />
							</div>

							<div className={classes['testimonials__itemDown']}>
								<h3 className={classes['testimonials__name']}>{d.name}</h3>
								<p>{d.review}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}
