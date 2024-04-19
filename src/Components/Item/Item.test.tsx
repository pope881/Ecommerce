import { render, screen } from '@testing-library/react'
import { Item } from './Item'
import React from 'react'
import '@testing-library/jest-dom'

describe('Item', () => {
	test('shows three descriptions sections', () => {
		render(
			<Item
				{{
                    key: 23,
					id: 1,
					name: 'item test',
					clothes_type: 'blouse',
					image: 'img',
					new_price: 12,
					old_price: 13,
				}}
			/>
		)

		// screen.debug()

		expect(screen.getByText('Washing and maintenance rules')).toBeInTheDocument()
		expect(screen.getByText('Material composition')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
	})
})
