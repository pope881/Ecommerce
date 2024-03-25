import React from 'react'
import { teamPeople } from '../Assets/mockData/mockData'
import { styles } from './OurTeam.styles'

export const OurTeam = (): JSX.Element => {
	return (
		<>
			<div className={styles.team}>
				<div className={styles.teamText}>
					<h4 className={styles.teamTextH4}>Our team</h4>
					<h1 className={styles.teamTextH1}>We're only human. Same like you.</h1>
					<hr className={styles.teamTextHr} />
					<p className={styles.teamTextP}>Meet our team. Diversity is our strength.</p>
				</div>
				<div className={styles.teamContainer}>
					{teamPeople.map((person, id) => (
						<div
							key={id}
							className={styles.teamCard}
							style={{
								backgroundImage: `url(${person.img})`,
							}}>
							<button className={styles.teamBtn}>
								<i className="far fa-question-circle"></i>
							</button>
							<div className={styles.teamCardText}>
								<h1 className={styles.teamCardTextH1}>{person.name}</h1>
								<h2 className={styles.teamCardTextH2}>{person.job}</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
