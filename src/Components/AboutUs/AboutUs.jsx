import about_img from '../Assets/about-6.png'
import classes from './AboutUs.module.css'

const AboutUs = () => {
	return (
		<section className={classes.aboutUs}>
			<div className={classes['aboutUs-mainImg']}>
				<img src={about_img} alt="" />
			</div>
			<div className={classes['aboutUs-text']}>
				<h4>About</h4>
				<h1>
					We Guarantee Your Business <br /> Success - Love to Help you
				</h1>
				<hr />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quis natus dolores tempore dolorem
					reprehenderit quae laborum. Vero aliquid, aut ab est nostrum rerum fugit! Ex saepe provident illum nostrum.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis, blanditiis voluptatibus laborum
					optio saepe veniam, neque explicabo deserunt exercitationem quos similique. Aliquid ratione ab ducimus
					deleniti cupiditate eligendi dolor.
				</p>

				<div className={classes['aboutUs-lastText']}>
					<div className={classes['aboutUs-lastText-text']}>
						<h3>500+</h3>
						<h5>Projects Done</h5>
					</div>
					<div className={classes['aboutUs-lastText-text']}>
						<h3>20k</h3>
						<h5>Happy Clients</h5>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
