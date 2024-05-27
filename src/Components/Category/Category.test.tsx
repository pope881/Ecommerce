import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Category, capitalizeFirstLetter } from './Category'
import menProduct from '../../../public/menProduct'

describe('Category', () => {
	test('check category rendering', () => {
		render(
			<BrowserRouter>
				<Category banner="/bannerImg/bannerMens.png" category="men" groupProducts={menProduct} />
			</BrowserRouter>
		)

		const itemsList = screen.getAllByTestId('item')
		expect(itemsList.length).toEqual(menProduct.length)
		const bannerImg = screen.getByTestId('bannerImg')
		expect(bannerImg).toHaveProperty('src', 'http://localhost:3000/bannerImg/bannerMens.png')
	})

	test('check capitalize function', () => {
		const capitalizedText = capitalizeFirstLetter('abc')
		expect(capitalizedText).toEqual('Abc')
	})
})
