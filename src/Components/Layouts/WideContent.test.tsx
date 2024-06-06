import { render, screen } from '@testing-library/react'
import { WideContent } from './WideContent'

describe('Category', () => {
	test('Checks category rendering', () => {
		render(<WideContent>abc</WideContent>)

		const wideContent = screen.getByTestId('wideContent')
		expect(wideContent).toHaveTextContent('abc')
	})
})
