import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	about: css({
		padding: '4% 10%',
		width: '100vw',
		height: '100vh',
		backgroundColor: theme.colors.black.main,
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: '4rem',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			gridTemplateColumns: '500px 1fr',
			height: 'auto',
		},
		[`@media (max-width: ${theme.breakpoints.lg})`]: {
			gridTemplateColumns: '350px 1fr',
			height: 'auto',
		},
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridTemplateColumns: '1fr',
			height: 'auto',
		},
	}),

	aboutMainImgImg: css({
		width: '100%',
		maxWidth: '560px',
		height: 'auto',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			maxWidth: '200px',
		},
	}),

	aboutText: css({
		padding: '6% 0%',
	}),

	aboutTextH4: css({
		color: theme.colors.red.main,
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	aboutTextH1: css({
		color: theme.colors.white.main,
		fontSize: '3.6rem',
		textTransform: 'capitalize',
		fontWeight: '700',
		lineHeight: '4.6rem',
		marginBottom: '3rem',
	}),

	aboutTextHr: css({
		width: '40%',
		border: 'none',
		height: '2px',
		backgroundColor: theme.colors.red.main,
		marginBottom: '5rem',
	}),

	aboutTextP: css({
		minWidth: 600,
		color: theme.colors.white.main,
		fontSize: '1.6rem',
		fontWeight: '400',
		lineHeight: '1.7',
		marginBottom: '6rem',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			minWidth: 400,
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			minWidth: 'initial',
		},
	}),

	aboutDescriptions: css({
		display: 'flex',
		gap: '6rem',
		[`@media (max-width: ${theme.breakpoints.lg})`]: {
			flexWrap: 'wrap',
		},
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gap: '4rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			gap: '3rem',
		},
	}),

	aboutDescriptionH3: css({
		color: theme.colors.red.main,
		fontSize: '6rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '4.5rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '3.5rem',
		},
	}),

	aboutDescriptionH5: css({
		color: theme.colors.white.main,
		fontSize: '1.8rem',
		lineHeight: '1.8rem',
	}),
}
