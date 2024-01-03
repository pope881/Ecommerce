import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import classes from './OurTestimonials.module.css'
import Person1 from '../Assets/testimonials/1.jpg'
import Person2 from '../Assets/testimonials/2.jpg'
import Person3 from '../Assets/testimonials/3.jpg'
import Person4 from '../Assets/testimonials/4.jpg'
import Person5 from '../Assets/testimonials/5.jpg'

const data = [
	{
		name: 'John Morgan',
		img: Person1,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		name: `Ellie Anderson`,
		img: Person2,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		name: `Nia Adebayo`,
		img: Person3,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		name: `Rigo Louie`,
		img: Person4,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
	{
		name: `Mia Williams`,
		img: Person5,
		review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
	},
]

const OurTestimonials = () => {
	const settings = {
		// dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	}
	return (
		<div className={classes.testimonials}>
			<div className={classes.container}>
				<div className={classes.items}>
					<Slider {...settings} className={classes.slider}>
						{data.map(d => (
							<div key={d.name} className={classes.item}>
								<div className={classes.itemTop}>
									<img src={d.img} alt="" className={classes.img} />
								</div>

								<div className={classes.itemDown}>
									<p className={classes.name}>{d.name}</p>
									<p className={classes.review}>{d.review}</p>
									<button className={classes.button}>Read More</button>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default OurTestimonials
