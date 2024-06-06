import { act, render, screen } from '@testing-library/react'
import { Item } from './Item'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { cld } from '../../cloudinary'
import { vi } from 'vitest'
import { stripParamsFromUrl } from '../../utils/stripParamsFromUrl'

describe('Item', () => {
	const itemImage = cld.image('Ecommerce/product_1a').format('auto').quality('auto')
	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true })
	})
	test('Renders image source property', async () => {

		render(
			<BrowserRouter>
				<Item key={23} id={1} name="item test" clothes_type="blouse" image={itemImage} new_price={12} old_price={13} />
			</BrowserRouter>
		)

		await act(async () => {
			vi.advanceTimersByTime(1)
		})

		const itemImageElement = screen.getByTestId('itemImage')
		const itemImageSrc = itemImageElement.getAttribute('src') as string;
		expect(stripParamsFromUrl(itemImageSrc)).toEqual(stripParamsFromUrl(itemImage.toURL()))
	})
	test('Renders item: name, old price and new price', () => {
		render(
			<BrowserRouter>
				<Item key={23} id={1} name="item test" clothes_type="blouse" image={itemImage} new_price={12} old_price={13} />
			</BrowserRouter>
		)

		const itemName = screen.getByTestId('itemName')
		expect(itemName).toHaveTextContent('item test')

		const itemOldPrice = screen.getByTestId('itemOldPrice')
		expect(itemOldPrice).toHaveTextContent('$13')

		const itemNewPrice = screen.getByTestId('itemNewPrice')
		expect(itemNewPrice).toHaveTextContent('$12')
	})
})
