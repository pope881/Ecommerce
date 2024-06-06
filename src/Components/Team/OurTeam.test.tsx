import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OurTeam } from './OurTeam'
import { teamPeople } from '../../../public/mockData/mockData'

describe('OurTeam', () => {
	test('Checks our team members amount (length of array)', () => {
		render(
			<BrowserRouter>
				<OurTeam />
			</BrowserRouter>
		)

		const items = screen.getAllByTestId('ourTeam-id')
		expect(items.length).toEqual(teamPeople.length)
	})
})
