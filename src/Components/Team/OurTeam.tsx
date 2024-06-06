import { useState } from 'react'
import { teamPeople } from '../../../public/mockData/mockData'
import { styles } from './OurTeam.styles'
import { AdvancedImage } from '@cloudinary/react'
import { cld } from '../../cloudinary'

export const OurTeam = (): JSX.Element => {
	const [hoverIndex, setHoverIndex] = useState<number | null>(null)
	return (
		<div className={styles.team}>
			<div className={styles.teamText}>
				<h4 className={styles.teamTextH4}>Our team</h4>
				<h1 className={styles.teamTextH1}>We're only human. Same like you.</h1>
				<hr className={styles.teamTextHr} />
				<p className={styles.teamTextP}>Meet our team. Diversity is our strength.</p>
			</div>
			<div className={styles.teamContainer}>
				{teamPeople.map((person, id) => {
					const imageURL = cld.image(person.img).format('auto').quality('auto')
					return (
						<div data-testid="ourTeam-id" key={id} className={styles.teamCard}>
							<AdvancedImage cldImg={imageURL} className={styles.teamCardImg} alt="team person image" />
							<button
								className={styles.teamBtn}
								onMouseEnter={() => setHoverIndex(id)}
								onMouseLeave={() => setHoverIndex(null)}>
								<i className="far fa-question-circle"></i>
							</button>
							<div className={styles.teamCardText(hoverIndex === id)}>
								<h1 className={styles.teamCardTextH1}>{person.name}</h1>
								<h2 className={styles.teamCardTextH2}>{person.job}</h2>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
