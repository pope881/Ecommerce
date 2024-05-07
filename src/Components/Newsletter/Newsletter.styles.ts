import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	newsletter: css({
		borderRadius: '25px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 auto',
		padding: '5rem 0',
		marginBottom: '8rem',
		background: `linear-gradient(180deg, ${theme.colors.red.main} 0%, ${theme.colors.white.main} 90%)`,
		gap: '3rem',
	}),

	newsletterH1: css({
		color: theme.colors.black.main,
		fontSize: '5.5rem',
		fontWeight: '600',
		textAlign: 'center',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '5rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '4rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '3rem',
		},
	}),

	newsletterP: css({
		color: theme.colors.black.main,
		fontSize: '2rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '1.8rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '1.6rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '1.4rem',
		},
	}),

	newsletterControl: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: theme.colors.white.main,
		borderRadius: '25px',
		border: `1px solid ${theme.colors.grey.light}`,
		width: '100%',
		maxWidth: '500px',
	}),

	newsletterControlInput: css({
		width: '100%',
		maxWidth: '500px',
		marginLeft: '3rem',
		border: 'none',
		outline: 'none',
		fontSize: '1.6rem',
		paddingRight: '1rem',
		background: 'none',
	}),

	newsletterControlButton: css({
		padding: '1rem 4rem',
		borderRadius: '25px',
		backgroundColor: theme.colors.black.main,
		color: theme.colors.white.main,
		fontSize: '1.6rem',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': { backgroundColor: theme.colors.white.main, color: theme.colors.black.main },
		'&:actice': { backgroundColor: theme.colors.white.main, color: theme.colors.black.main },
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			padding: '0.75rem 3rem',
		},
	}),

	newsletterInvalidP: css({
		color: theme.colors.red.dark,
		fontSize: '1.2rem',
		textAlign: 'center',
		marginTop: '1rem',
	}),

	newsletterForm: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	}),
}
