import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import { styles } from './OurTestimonials.styles'
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
		<div className={styles.testimonials}>
			<div className={styles.testimonialsHeaderText}>
				<h4 className={styles.testimonialsHeaderTextH4}>testimonials</h4>
				<h1 className={styles.testimonialsHeaderTextH1}>What Our Customers Say</h1>
				<hr className={styles.testimonialsHeaderTextHr} />
				<p className={styles.testimonialsHeaderTextP}>
					We are always super happy when we receive positive feedback, and we are constantly amazed by the demand for
					our fabrics with orders coming from all corners of the globe.
				</p>
			</div>
			<div className={styles.testimonialsItems}>
				<Slider {...SETTINGS}>
					{testimonialData.map(data => (
						<div key={data.name} className={styles.testimonialsItem}>
							<div className={styles.testimonialsItemTop}>
								<img src={data.img} alt="person expressing opinions" className={styles.testimonialsItemImg} />
							</div>
							<div className={styles.testimonialsItemDown}>
								<h3 className={styles.testimonialsName}>{data.name}</h3>
								<p className={styles.testimonialsItemDownP}>{data.review}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}
