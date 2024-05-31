import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OurTeam } from './OurTeam'

describe('OurTeam', () => {
	test('checks our team members amount (length of array)', () => {
		render(
			<BrowserRouter>
				<OurTeam />
			</BrowserRouter>
		)

		const items = screen.getAllByTestId('ourTeam-id')
		expect(items.length).toEqual(6)
	})
})
