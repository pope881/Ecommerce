import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Popular } from './Popular'
import { dataProductWomen } from '../../../public/dataWomen'
import { dataProductMen } from '../../../public/dataMen'
import { dataProductKids } from '../../../public/dataKids'
describe('Popular', () => {
	test('Checks popular items amount (length of array)', () => {
		render(
			<BrowserRouter>
				<Popular />
			</BrowserRouter>
		)

		const items = screen.getAllByTestId('itemId')
		const expectedItemsLength = dataProductWomen.length + dataProductMen.length + dataProductKids.length
		expect(items.length).toEqual(expectedItemsLength)
	})
})
