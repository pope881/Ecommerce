import { styles } from './Hero.styles'
const heroWomanImage = '/otherImg/heroWomanImage.png'
const heroManImage = '/otherImg/heroManImage.png'

export const Hero = (): JSX.Element => {
	const handleClickScroll = () => {
		const element = document.getElementById('new-collections')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<div>
			<div className={styles.heroTextTop}>
				<h1 className={styles.heroTextTopH1}>NEW ARRIVALS ONLY</h1>
				<hr className={styles.heroTextTopHr}></hr>
			</div>
			<div className={styles.hero}>
				<div className={styles.heroImgWoman}>
					<img
						data-testid="womenImage"
						className={styles.heroImgWomanImg}
						src={heroWomanImage}
						alt="young girl dressed in sports clothes"
					/>
				</div>
				<div className={styles.heroText}>
					<div>
						<p className={styles.heroTextP}>
							new Collections
							<br />
							For Everyone
						</p>
					</div>
					<div>
						<button onClick={handleClickScroll} className={styles.heroBtn}>
							Check out
						</button>
					</div>
				</div>
				<div className={styles.heroImgMan}>
					<img
						data-testid="menImage"
						className={styles.heroImgManImg}
						src={heroManImage}
						alt="men dressed in sports clothes"
					/>
				</div>
			</div>
		</div>
	)
}
