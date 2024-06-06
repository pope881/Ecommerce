import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { styles } from './OurTestimonials.styles'
import { testimonialData } from '../../../public/mockData/mockData'
import { AdvancedImage } from '@cloudinary/react'
import { cld } from '../../cloudinary'

const SETTINGS: Settings = {
	autoplay: true,
	autoplaySpeed: 2500,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
	],
}

export const OurTestimonials = (): JSX.Element => {
	return (
		<div className={styles.testimonials}>
			<div className={styles.testimonialsHeaderText}>
				<h4 className={styles.testimonialsHeaderTextH4}>testimonials</h4>
				<h1 className={styles.testimonialsHeaderTextH1}>What Our Customers Say</h1>
				<hr className={styles.testimonialsHeaderTextHr} />
				<p data-testid='testimonial-paragraph' className={styles.testimonialsHeaderTextP}>
					We are always super happy when we receive positive feedback, and we are constantly amazed by the demand for
					our fabrics with orders coming from all corners of the globe.
				</p>
			</div>
			<div className={styles.testimonialsItems}>
				<Slider {...SETTINGS}>
					{testimonialData.map(data => {
						const imageURL = cld.image(data.img).format('auto').quality('auto')
						return (
							<div key={data.name} className={styles.testimonialsItem}>
								<div className={styles.testimonialsItemTop}>
									<AdvancedImage
										data-testid="testimonial-id"
										cldImg={imageURL}
										alt="person expressing opinions"
										className={styles.testimonialsItemImg}
									/>
								</div>
								<div className={styles.testimonialsItemDown}>
									<h3 className={styles.testimonialsName}>{data.name}</h3>
									<p className={styles.testimonialsItemDownP}>{data.review}</p>
								</div>
							</div>
						)
					})}
				</Slider>
			</div>
		</div>
	)
}
