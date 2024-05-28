import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NewCollections } from './NewCollections'
import { newCollections } from '../../../public/newCollections'

describe('NewCollections', () => {
	test('checks other products items amount (length of array)', () => {
		render(
			<BrowserRouter>
				<NewCollections />
			</BrowserRouter>
		)

		const items = screen.getAllByTestId('itemId')
		console.log(items.length)
		expect(items.length).toEqual(newCollections.length)
	})
})
