import { render, screen, act } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { OurTestimonials } from './OurTestimonials'
import { testimonialData } from '../../../public/mockData/mockData'
import { vi } from 'vitest'

const stripParams = (url: string) => url.split('?')[0]

describe('OurTestimonials', () => {
	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true })
	})

	afterEach(() => {
		vi.runOnlyPendingTimers()
		vi.useRealTimers()
	})

	const firstImageSrc = testimonialData[0].img
	const secondImageSrc = testimonialData[1].img
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

		await act(async () => {
			vi.advanceTimersByTime(1)
		})

		const personImg = screen.getAllByTestId('testimonial-id')
		const alt = personImg[0].getAttribute('alt') as string
		expect(alt).toEqual('person expressing opinions')

		const src = personImg[0].getAttribute('src') as string
		console.log(src)
		expect(src).toEqual(firstImageSrc)
	})

	it('Changes testimonial image after 2500ms', async () => {
		const firstImage = testimonialData[0]

		render(
			<BrowserRouter>
				<OurTestimonials />
			</BrowserRouter>
		)

		expect(screen.getByRole('heading', { name: firstImage.name })).toBeInTheDocument()

		await act(async () => {
			vi.advanceTimersByTime(2500)
		})
		const testimonialImg = screen.getByTestId('testimonial-id')
		const src = stripParams(testimonialImg.getAttribute('src') as string)
		expect(src).toEqual(stripParams(secondImageSrc))
	}, 10000)
})
