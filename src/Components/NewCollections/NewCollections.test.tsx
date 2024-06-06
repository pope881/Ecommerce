import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NewCollections } from './NewCollections'
import { newCollections } from '../../../public/newCollections'

describe('NewCollections', () => {
	test('Checks other products items amount (length of array)', () => {
		render(
			<BrowserRouter>
				<NewCollections />
			</BrowserRouter>
		)

		const items = screen.getAllByTestId('itemId')
		expect(items.length).toEqual(newCollections.length)
	})
})
