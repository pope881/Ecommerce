import { act, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Category, capitalizeFirstLetter } from './Category'
import menProduct from '../../../public/menProduct'
import { cld } from '../../cloudinary'
import { stripParamsFromUrl } from '../../utils/stripParamsFromUrl'
import { vi } from 'vitest'

describe('Category', () => {
	const image = cld.image('Ecommerce/bannerMens').format('auto').quality('auto')
	const strippedImageUrl = stripParamsFromUrl(image.toURL())

	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true })
	})
	test('Checks category rendering', async () => {
		render(
			<BrowserRouter>
				<Category banner={image} category="men" groupProducts={menProduct} />
			</BrowserRouter>
		)

		await act(async () => {
			vi.advanceTimersByTime(1)
		})
		const itemsList = screen.getAllByTestId('itemId')
		expect(itemsList.length).toEqual(menProduct.length)
		const bannerImg = screen.getByTestId('bannerImg')
		const src = stripParamsFromUrl(bannerImg.getAttribute('src') as string)
		expect(src).toEqual(strippedImageUrl)
	})

	test('Checks capitalize function', () => {
		render(
			<BrowserRouter>
				<Category banner={image} category="men" groupProducts={menProduct} />
			</BrowserRouter>
		)
		const capitalizedText = capitalizeFirstLetter('abc')
		expect(capitalizedText).toEqual('Abc')
	})
})
