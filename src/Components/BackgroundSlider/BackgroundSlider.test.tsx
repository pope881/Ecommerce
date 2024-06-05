import { render, screen, fireEvent, act } from '@testing-library/react'
import { vi } from 'vitest'
import { BackgroundSlider } from './BackgroundSlider'
import { imageSlide } from '../../../public/mockData/mockData'

describe('BackgroundSlider Component', () => {
	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true })
	})

	afterEach(() => {
		vi.runOnlyPendingTimers()
		vi.useRealTimers()
	})

	it('renders correctly with the first image and title', () => {
		render(<BackgroundSlider />)

		const firstImage = imageSlide[0]
		expect(screen.getByRole('heading', { name: firstImage.title })).toBeInTheDocument()
		const imageSlideBody = screen.getByTestId('imageSlideBody')
		expect(imageSlideBody).toBeInTheDocument()
		expect(imageSlideBody).toHaveTextContent(imageSlide[0].body)

		const backgroundDiv = screen.getByTestId('imageSlideBg')
		expect(backgroundDiv).toHaveStyle(`background-image: url(${firstImage.url})`)
		// expect(backgroundDiv).toHaveAttribute('cldImg', `cld.image(${firstImage.url}).format('auto').quality('auto')`)
	})

	it('changes background image after 6000ms', async () => {
		const firstImage = imageSlide[0]
		const secondImage = imageSlide[1]
		render(<BackgroundSlider />)
		expect(screen.getByRole('heading', { name: firstImage.title })).toBeInTheDocument()

		await act(async () => {
			vi.advanceTimersByTime(6000)
		})
		const backgroundDiv = screen.getByTestId('imageSlideBg')
		expect(backgroundDiv).toHaveStyle(`background-image: url(${secondImage.url})`)
	}, 10000)

	it('changes background image on carousel indicator click', () => {
		render(<BackgroundSlider />)

		const secondImage = imageSlide[1]

		const carouselIndicators = screen.getAllByRole('button')
		fireEvent.click(carouselIndicators[1])

		expect(screen.getByRole('heading', { name: secondImage.title })).toBeInTheDocument()

		const backgroundDiv = screen.getByTestId('imageSlideBg')
		expect(backgroundDiv).toHaveStyle(`background-image: url(${secondImage.url})`)
	})
})
