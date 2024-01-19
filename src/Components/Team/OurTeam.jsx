import React from 'react'
import classes from './OurTeam.module.css'

import Person1 from '../Assets/team_img/1.png'
import Person2 from '../Assets/team_img/2.png'
import Person3 from '../Assets/team_img/3.png'
import Person4 from '../Assets/team_img/4.png'
import Person5 from '../Assets/team_img/5.png'
import Person6 from '../Assets/team_img/6.png'

const teamPpl = [
	{ img: Person1, name: 'Adam Miller', job: 'CHIEF EXECUTIVE OFFICER' },
	{ img: Person2, name: 'Michael Puerto', job: 'CREATIVE DIRECTOR' },
	{ img: Person3, name: 'Jane Kelly', job: 'UX DESIGNER' },
	{ img: Person4, name: 'Monica Smith', job: 'DESIGN DIRECTOR' },
	{ img: Person5, name: 'Jake Palace', job: 'IT SPECIALIST' },
	{ img: Person6, name: 'Caroline Blunt', job: 'LEAD PRODUCT DESIGNER' },
]

function OurTeam() {
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
					{teamPpl.map((ppl, id) => (
						<div
							key={id}
							className={classes['team__card']}
							style={{
								backgroundImage: `url(${ppl.img})`,
							}}>
							<button className={classes['team__btn']}>
								<i className="far fa-question-circle"></i>
							</button>
							<div className={classes['team__cardText']}>
								<h1>{ppl.name}</h1>
								<h2>{ppl.job}</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default OurTeam
