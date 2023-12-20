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
		{ img: Person1, name: 'Luke Miller', job: 'Salesman' },
		{ img: Person2, name: 'Michael Diaz', job: 'Business Owner' },
		{ img: Person3, name: 'Briana Ross', job: 'Photographer' },
		{ img: Person4, name: 'Lauren Rivera', job: 'Car Detailist' },
		{ img: Person5, name: 'Martin Rizz', job: 'Mechanic' },
		{ img: Person6, name: 'Caitlyn Hunt', job: 'Menager' },
	]
	return (
		<>
			<div className="team">
				<div className="team-text">
					<h4>About</h4>
					<h1>We aim to empower you to look and feel confident</h1>
					<hr />
					<p>We are a global brand for all of you, we believe in affordable fashion for all.</p>
				</div>
				<div className="team-container">
					{teamPpl.map((ppl, id) => (
						<div key={id} className="team-container__box">
							<div className="team-container__box__img-div">
								<img src={ppl.img} alt="team_img" />
							</div>
							<div className="team-container__box__descr">
								<h3>{ppl.name}</h3>
								<p>{ppl.job}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default OurTeam
