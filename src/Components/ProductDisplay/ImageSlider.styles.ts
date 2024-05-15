import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	imgSlider: css({
		height: '100%',
		position: 'relative',
		width: '500px',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			height: 688,
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			width: '100%',
			maxWidth: 400
		}
	}),

	imgSliderArrow: css({
		position: 'absolute',
		top: '50%',
		transform: 'translate(0, -50%)',
		fontSize: '7rem',
		color: theme.colors.grey.main,
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
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			height: 'calc(100% - 45px)'
		}
	}),

	imgSliderDots: css({
		display: 'flex',
		justifyContent: 'center',
		color: theme.colors.grey.main,
		height: 45
	}),

	imgSliderDot: css({
		margin: '0 0.5rem',
		cursor: 'pointer',
		fontSize: '3rem',
	}),
}
