import { render, screen } from '@testing-library/react'
import { OtherProducts } from './OtherProducts'
import { dataProductWomen } from '../../../public/dataWomen'
import { BrowserRouter } from 'react-router-dom'
describe('OtherProducts', () => {
	test('checks other products items amount (length of array)', () => {
		render(
			<BrowserRouter>
				<OtherProducts />
			</BrowserRouter>
		)

		const items = screen.getAllByTestId('itemId')
		expect(items.length).toEqual(dataProductWomen.length)
	})
})
