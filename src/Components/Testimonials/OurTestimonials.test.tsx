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
	console.log(firstImageSrc)
	// const secondImageSrc = testimonialData[1].img
	test('Renders correctly with the first title and image', async () => {
		render(
			<BrowserRouter>
				<OurTestimonials />
			</BrowserRouter>
		)
		const firstImage = testimonialData[0]
		expect(screen.getByRole('heading', { name: firstImage.name })).toBeInTheDocument()
		const imageSlideBody = screen.getByTestId('testimonial-paragraph')
		expect(imageSlideBody).toBeInTheDocument()

		await act(async () => {
			vi.advanceTimersByTime(1)
		})

		const personImg = screen.getAllByTestId('testimonial-id')
		console.log(personImg)
		const src = personImg[0].getAttribute('src') as string
		console.log(src)
		expect(src).toEqual(firstImageSrc)
	})
})
