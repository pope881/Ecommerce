import { styles } from './AboutUs.styles'
import { motion } from 'framer-motion'

export const AboutUs = (): JSX.Element => {
	return (
		<div className={styles.about}>
			<motion.div
				className={styles.aboutMainImgImg}
				initial={{ opacity: 1, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2 }}>
				<img className={styles.aboutMainImgImg} src="/aboutImg/1.png" alt="men with black sunglasses" />
			</motion.div>
			<motion.div
				className={styles.aboutText}
				initial={{ opacity: 1, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, delay: 2 }}>
				<h4 className={styles.aboutTextH4}>About</h4>
				<h1 className={styles.aboutTextH1}>We aim to empower you to look and feel confident</h1>
				<hr className={styles.aboutTextHr} />
				<p className={styles.aboutTextP}>
					We are a global brand for all of you, we believe in affordable fashion for all. We are the number 1
					destination for fashion and lifestyle for all the occasions in your life. A passionate drive to exceed
					expectations. For more than 15 years, we've worked to deliver the best possible shopping experience, helping
					our customers express their style—not just buy fashion.
				</p>
				<div className={styles.aboutDescriptions}>
					<div>
						<h3 className={styles.aboutDescriptionH3}>15y+</h3>
						<h5 className={styles.aboutDescriptionH5}>Online Shopping</h5>
					</div>
					<div>
						<h3 className={styles.aboutDescriptionH3}>20k+</h3>
						<h5 className={styles.aboutDescriptionH5}>Happy Clients</h5>
					</div>
					<div>
						<h3 className={styles.aboutDescriptionH3}>80+</h3>
						<h5 className={styles.aboutDescriptionH5}>Countries</h5>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
