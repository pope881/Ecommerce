import about_img from '../Assets/about-6.png'
import './AboutUs.css'

const AboutUs = () => {
	return (
		<section className="about-us">
			<div className="main-img">
				<img src={about_img} alt="" />
			</div>
			<div className="text">
				<h4>About</h4>
				<h1>
					We Guarantee Your Business <br /> Success - Love to Help you
				</h1>
				<hr />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quis natus dolores tempore dolorem
					reprehenderit quae laborum. Vero aliquid, aut ab est nostrum rerum fugit! Ex saepe provident illum nostrum.
				</p>

				<div className="last-text">
					<div className="text-1">
						<h3>500+</h3>
						<h5>Projects Done</h5>
					</div>
					<div className="text-1">
						<h3>20k</h3>
						<h5>Happy Clients</h5>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
