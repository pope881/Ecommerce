import React from 'react'
import classes from './OurTeam.module.css'
import { teamPeople } from '../Assets/mockData/mockData'

export const OurTeam = (): JSX.Element => {
	return (
		<>
			<div className={classes.team}>
				<div className={classes['team__text']}>
					<h4>Our team</h4>
					<h1>We're only human. Same like you.</h1>
					<hr />
					<p>Meet out team. Diversity is our strength.</p>
				</div>
				<div className={classes['team__container']}>
					{teamPeople.map((person, id) => (
						<div
							key={id}
							className={classes['team__card']}
							style={{
								backgroundImage: `url(${person.img})`,
							}}>
							<button className={classes['team__btn']}>
								<i className="far fa-question-circle"></i>
							</button>
							<div className={classes['team__cardText']}>
								<h1>{person.name}</h1>
								<h2>{person.job}</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
