import { render, screen, fireEvent, act } from '@testing-library/react'
import { vi } from 'vitest'
import { BackgroundSlider } from './BackgroundSlider'
import { imageSlide } from '../../../public/mockData/mockData'
import { cld } from '../../cloudinary'

const stripParams = (url: string) => url.split('?')[0]
describe('BackgroundSlider', () => {
	beforeEach(() => {
		vi.useFakeTimers({ shouldAdvanceTime: true })
	})

	afterEach(() => {
		vi.runOnlyPendingTimers()
		vi.useRealTimers()
	})

	const firstImageSrc = cld.image(imageSlide[0].url).toURL()
	const secondImageSrc = cld.image(imageSlide[1].url).toURL()
	it('Renders correctly with the first title and image', async () => {
		render(<BackgroundSlider />)

		const firstImage = imageSlide[0]
		expect(screen.getByRole('heading', { name: firstImage.title })).toBeInTheDocument()
		const imageSlideBody = screen.getByTestId('imageSlideBody')
		expect(imageSlideBody).toBeInTheDocument()
		await act(async () => {
			vi.advanceTimersByTime(1)
		})

		const backgroundDiv = screen.getByTestId('imageSlideBg')
		const src = stripParams(backgroundDiv.getAttribute('src') as string)
		expect(src).toEqual(stripParams(firstImageSrc))
	})

	it('Changes background image after 6000ms', async () => {
		const firstImage = imageSlide[0]
		render(<BackgroundSlider />)
		expect(screen.getByRole('heading', { name: firstImage.title })).toBeInTheDocument()

		await act(async () => {
			vi.advanceTimersByTime(6000)
		})
		const backgroundDiv = screen.getByTestId('imageSlideBg')
		const src = stripParams(backgroundDiv.getAttribute('src') as string)
		expect(src).toEqual(stripParams(secondImageSrc))
	}, 10000)

	it('Changes background image on carousel indicator click', async () => {
		render(<BackgroundSlider />)

		const secondImage = imageSlide[1]

		const carouselIndicators = screen.getAllByRole('button')
		fireEvent.click(carouselIndicators[1])

		expect(screen.getByRole('heading', { name: secondImage.title })).toBeInTheDocument()

		await act(async () => {
			vi.advanceTimersByTime(1)
		})

		const backgroundDiv = screen.getByTestId('imageSlideBg')
		const src = stripParams(backgroundDiv.getAttribute('src') as string)
		expect(src).toEqual(stripParams(secondImageSrc))
	})
})
