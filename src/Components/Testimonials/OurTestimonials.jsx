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
		name: 'John Morgan, USA',
		img: Person1,
		review: `''Shopping at shop4u has completely elevated my skillset, my creativity and my understanding of how fabric works on the body- their beautiful, high quality textiles have both challenged and inspired me, and I wouldn’t be the maker I am today without them!''`,
	},
	{
		name: `Ellie Anderson, Canada`,
		img: Person2,
		review: `''The shop4u has rapidly become my favourite place to order fabric online. I can shop safe in the knowledge that the fabrics will be top quality and true to the thorough online description. Fast shipping plus something to suit every project from everyday basics to ball gown!''`,
	},
	{
		name: `Nia Adebayo, Japan`,
		img: Person3,
		review: `''The shop4u has the best range of linens! I love their entire range of linen ginghams, and they have a wonderful curation of solid colors too.''`,
	},
	{
		name: `Rigo Louie, UK`,
		img: Person4,
		review: `''The shop4u is my first stop to find unique, high quality fabrics. I love the linen, the merino, the woolens…I can go on and on! And Liberty Fabrics I can’t find anywhere else!''`,
	},
	{
		name: `Mia Williams, Italy`,
		img: Person5,
		review: `''Every time my package arrives I am amazed at the quality of the fabrics. I know that the fabrics are well made from orders in the past, but I am still surprised every time I get my package. They all wash beautifully including the merino wool!''`,
	},
]

const OurTestimonials = () => {
	const settings = {
		// dots: true,
		autoplay: true,
		autoplaySpeed: 2500,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	}
	return (
		<div className={classes.testimonials}>
			<div className={classes['testimonials-text']}>
				<h4>testimonials</h4>
				<h1>What Our Customers Say</h1>
				<hr />
				<p>
					We are always super happy when we receive positive feedback, and we are constantly amazed by the demand for
					our fabrics with orders coming from all corners of the globe.
				</p>
			</div>
			<div className={classes.container}>
				<div className={classes.items}>
					<Slider {...settings} className={classes.slider}>
						{data.map(d => (
							<div key={d.name} className={classes.item}>
								<div className={classes.itemTop}>
									<img src={d.img} alt="" className={classes.img} />
								</div>

								<div className={classes.itemDown}>
									<h3 className={classes.name}>{d.name}</h3>
									<p className={classes.review}>{d.review}</p>
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
