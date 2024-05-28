import { render, screen } from '@testing-library/react'
import { Item } from './Item'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

describe('Item', () => {
	test('renders image source property', () => {
		render(
			<BrowserRouter>
				<Item key={23} id={1} name="item test" clothes_type="blouse" image="/abc.svg" new_price={12} old_price={13} />
			</BrowserRouter>
		)

		const itemImage = screen.getByTestId('itemImage')
		expect(itemImage).toHaveProperty('src', 'http://localhost:3000/abc.svg')
	})
	test('renders item: name, old price and new price', () => {
		render(
			<BrowserRouter>
				<Item key={23} id={1} name="item test" clothes_type="blouse" image="/abc.svg" new_price={12} old_price={13} />
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
