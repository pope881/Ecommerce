import React from 'react'
import './OurTeam.css'

import Person1 from '../Assets/team/1.png'
import Person2 from '../Assets/team/2.png'
import Person3 from '../Assets/team/3.png'
import Person4 from '../Assets/team/4.png'
import Person5 from '../Assets/team/5.png'
import Person6 from '../Assets/team/6.png'

function OurTeam() {
	const teamPpl = [
		{ img: Person1, name: 'Luke Miller', job: 'CHIEF EXECUTIVE OFFICER' },
		{ img: Person2, name: 'Michael Diaz', job: 'CREATIVE DIRECTOR' },
		{ img: Person3, name: 'Briana Ross', job: 'UX DESIGNER' },
		{ img: Person4, name: 'Lauren Rivera', job: 'DESIGN DIRECTOR' },
		{ img: Person5, name: 'Martin Rizz', job: 'IT SPECIALIST' },
		{ img: Person6, name: 'Caitlyn Hunt', job: 'LEAD PRODUCT DESIGNER' },
	]
	return (
		<>
			<div className="team">
				<div className="team-text">
					<h4>Our team</h4>
					<h1>We're only human. Same like you.</h1>
					<hr />
					<p>Meet out team. </p>
				</div>
				<div className="team-container">
					{teamPpl.map((ppl, id) => (
						<div
							key={id}
							className="team-container__card"
							style={{
								backgroundImage: `url(${ppl.img})`,
							}}>
							<button className="team-container__card__button">
								<i className="far fa-question-circle"></i>
							</button>
							<div className="team-container__card__text">
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
