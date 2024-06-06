import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	offers: css({
		display: 'flex',
		marginBottom: '8rem',
		background: `linear-gradient(180deg, ${theme.colors.red.main} 0%, ${theme.colors.white.main} 90%)`,
		borderRadius: '25px',
		padding: '1rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			paddingBottom: '4rem',
			flexDirection: 'column',
		},
	}),

	offersLeft: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}),

	offersLeftH1: css({
		color: theme.colors.black.main,
		fontSize: '6rem',
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

	offersLeftP: css({
		color: theme.colors.black.main,
		fontSize: '2rem',
		fontWeight: '600',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			textAlign: 'center',
		},
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

	offersLeftButton: css({
		fontSize: '1.6rem',
		border: `1px solid ${theme.colors.red.main}`,
		backgroundColor: theme.colors.red.main,
		color: theme.colors.white.main,
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		marginTop: '2rem',
		'&:hover, &:active': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
	}),

	offersRight: css({
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: '5rem',
	}),

	offersWomanImg: css({
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'none',
		},
	}),
}
