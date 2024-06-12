import { render, screen, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OurTestimonials } from './OurTestimonials'
import { testimonialData } from '../../../public/mockData/mockData'
import { vi } from 'vitest'

describe('OurTestimonials', () => {
	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true })
	})

	afterEach(() => {
		vi.runOnlyPendingTimers()
		vi.useRealTimers()
	})

	const firstImageSrc = testimonialData[0].img
	test('Renders correctly with the first title, alt attribute and image', async () => {
		render(
			<BrowserRouter>
				<OurTestimonials />
			</BrowserRouter>
		)
		const firstImage = testimonialData[0]
		expect(screen.getByRole('heading', { name: firstImage.name })).toBeInTheDocument()
		const imageSlideBody = screen.getByTestId('testimonial-paragraph')
		expect(imageSlideBody).toBeInTheDocument()
		const personImg = screen.getAllByTestId('testimonial-id')
		const alt = personImg[0].getAttribute('alt') as string

		await act(async () => {
			vi.advanceTimersByTime(1)
		})


		expect(alt).toEqual('person expressing opinions')

		const src = personImg[3].getAttribute('src') as string
		expect(src.includes(firstImageSrc)).toBe(true)
	})
})
