import { render, screen } from '@testing-library/react'
// import { describe, it, expect } from 'vitest'

import { DescriptionBox } from './DescriptionBox'

import '@testing-library/jest-dom'

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

		// screen.debug()

		expect(screen.getByText('Washing and maintenance rules')).toBeInTheDocument()
		expect(screen.getByText('Material composition')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
	})
})
