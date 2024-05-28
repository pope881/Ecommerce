import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Breadcrumb } from './Breadcrumb'
import { allProduct } from '../../../public/allProduct'

describe('Breadcrumb', () => {
	console.log(allProduct[26])

	test('check breadcrumb category and item', () => {
		render(
			<BrowserRouter>
				<Breadcrumb product={allProduct[28]} />
			</BrowserRouter>
		)
		const categoryBreadcrumb = screen.getByTestId('breadcrumbCategory')
		const itemNameBreadcrumb = screen.getByTestId('breadcrumbItemName')
		expect(categoryBreadcrumb).toHaveTextContent(allProduct[28].category)
		expect(itemNameBreadcrumb).toHaveTextContent(allProduct[28].name)
	})
})
