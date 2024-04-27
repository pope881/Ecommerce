import { css } from '@emotion/css'

export const styles = {
	imgSlider: css({
		height: '100%',
		position: 'relative',
		width: '500px',
	}),

	imgSliderArrow: css({
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		fontSize: '7rem',
		color: '#555',
		zIndex: '1',
		cursor: 'pointer',
	}),

	imgSliderArrowLeft: css({
		left: '16px',
	}),

	imgSliderArrowRight: css({
		right: '16px',
	}),

	imgSliderSlide: css({
		width: '100%',
		height: '100%',
		borderRadius: '10px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	}),

	imgSliderDots: css({
		display: 'flex',
		justifyContent: 'center',
		color: '#555',
	}),

	imgSliderDot: css({
		margin: '0 0.5rem',
		cursor: 'pointer',
		fontSize: '3rem',
	}),
}
