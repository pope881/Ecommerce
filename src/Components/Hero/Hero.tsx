import { styles } from './Hero.styles'

export const Hero = () => {
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
						className={styles.heroImgWomanImg}
						src="../../../public/otherImg/heroWomanImage.png"
						alt="young girl dressed in sports clothes"
					/>
				</div>
				<div className={styles.heroText}>
					<div>
						<p className={styles.heroTextP}> new Collections</p>
						<p className={styles.heroTextP}>For Everyone </p>
					</div>
					<div>
						<button onClick={handleClickScroll} className={styles.heroBtn}>
							Check out
						</button>
					</div>
				</div>
				<div className={styles.heroImgMan}>
					<img
						className={styles.heroImgManImg}
						src="../../../public/otherImg/heroManImage.png"
						alt="men dressed in sports clothes"
					/>
				</div>
			</div>
		</div>
	)
}
