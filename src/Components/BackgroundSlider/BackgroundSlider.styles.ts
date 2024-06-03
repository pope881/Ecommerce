import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	container: css({
		textAlign: 'center',
		height: '100vh',
		backgroundColor: theme.colors.black.main,
		marginBottom: '6rem',
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			height: '65vh',
		},
	}),

	containerBackground: css({
		height: '100%',
		position: 'relative',
	}),

	containerDescription: css({
		position: 'absolute',
		zIndex: '999',
		color: theme.colors.white.main,
		top: '30%',
		left: '10%',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		},
	}),

	containerDescriptionH1: css({
		fontSize: '16rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '9rem',
		},
	}),

	containerDescriptionP: css({
		fontSize: '2.4rem',
	}),

	carouselCarousel: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	carouselCarouselSpan: css({
		width: '45px',
		height: '12px',
		backgroundColor: theme.colors.white.main,
		marginLeft: '1rem',
		borderRadius: '10px',
		cursor: 'pointer',
		boxShadow: '3px 2px 2px rgba(73, 72, 72, 0.338)',
		border: 'none'
	}),

	containerBackgroundTransparent: css({
		width: '100%',
		height: '100vh',
		position: 'absolute',
		zIndex: '998',
		top: '0',
		left: '0',
		backgroundImage: 'linear-gradient(to top, rgba(154, 21, 21, 0), rgb(75, 68, 68))',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			height: '60vh',
		},
	}),
}
