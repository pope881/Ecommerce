import { fireEvent, render, screen } from '@testing-library/react'
import { DescriptionBox } from './DescriptionBox'

describe('DescriptionBox', () => {
	test('shows three descriptions sections', () => {
		render(
			<DescriptionBox
				product={{
					id: 1,
					name: 'description test',
					category: 'men',
					clothes_type: 'blouse',
					image: 'img',
					image_slide: [{ url: 'slide' }],
					new_price: 12,
					old_price: 13,
					description: 'abc',
					madeOf: 'cotton',
					maintenance: [{ feature: 'abc' }],
				}}
			/>
		)

		expect(screen.getByText('Washing and maintenance rules')).toBeInTheDocument()
		expect(screen.getByText('Material composition')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
	})

	test('shows material composition text if the material composition button was clicked', () => {
		render(
			<DescriptionBox
				product={{
					id: 1,
					name: 'description test',
					category: 'men',
					clothes_type: 'blouse',
					image: 'img',
					image_slide: [{ url: 'slide' }],
					new_price: 12,
					old_price: 13,
					description: 'abc',
					madeOf: 'cotton',
					maintenance: [{ feature: 'Material I: 80% COTTON, 20% POLYESTER' }],
				}}
			/>
		)

		const materialCompositionBtns = screen.getAllByTestId('materialCompositionBtn')
		expect(materialCompositionBtns[1]).toBeInTheDocument()
		fireEvent.click(materialCompositionBtns[1])
		const accordion = screen.getAllByTestId('accordion')
		expect(accordion[1]).toHaveClass('visible')
	})
})
