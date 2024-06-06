import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	login: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '4% 10%',
		height: '100vh',
		backgroundColor: theme.colors.black.main,
	}),

	loginText: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	loginTextH2: css({
		fontSize: '8rem',
		color: theme.colors.red.main,
		marginRight: '2rem',
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '6rem',
		},
	}),

	loginTextP: css({
		fontSize: '9rem',
		color: theme.colors.red.main,
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '6rem',
		},
	}),

	loginForm: css({
		position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		maxWidth: '55rem',
		margin: 'auto',
		padding: '5rem',
		background: theme.colors.white.main,
		borderRadius: '8px',
		boxShadow: '0 0 16px 1px rgba(0, 0, 0, 0.5)',
		transition: '0.3s',
		'&::before': {
			transition: '0.3s',
			content: '""',
			position: 'absolute',
			width: '0px',
			height: '0px',
			top: '-25px',
			left: '-25px',
			borderTop: `0px solid ${theme.colors.red.main}`,
			borderLeft: `0px solid ${theme.colors.red.main}`,
		},
		'&::after': {
			transition: '0.3s',
			content: '""',
			position: 'absolute',
			width: '0px',
			height: '0px',
			bottom: '-25px',
			right: '-25px',
			borderBottom: `0px solid ${theme.colors.red.main}`,
			borderRight: `0px solid ${theme.colors.red.main}`,
		},
		'&:hover::before': {
			width: '25%',
			height: '20%',
			borderTop: `6px solid ${theme.colors.red.main}`,
			borderLeft: `6px solid ${theme.colors.red.main}`,
		},
		'&:hover::after': {
			width: '25%',
			height: '20%',
			borderBottom: `6px solid ${theme.colors.red.main}`,
			borderRight: `6px solid ${theme.colors.red.main}`,
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			margin: '3rem auto',
		},
	}),

	loginControl: css({
		marginBottom: '1rem',
	}),

	loginControlLoginNoMargin: css({
		marginBottom: '0',
	}),

	loginControlLabel: css({
		display: 'block',
		fontSize: '1.6rem',
		marginBottom: '0.5rem',
		color: theme.colors.black.main,
		textTransform: 'uppercase',
	}),

	loginControlInput: css({
		display: 'block',
		width: '100%',
		maxWidth: '40rem',
		padding: '0.5rem',
		fontSize: '1.6rem',
		borderRadius: '4px',
		border: '1px solid',
		backgroundColor: theme.colors.grey.strong,
		color: theme.colors.black.main,
	}),

	loginControlError: css({
		height: '3.5rem',
		padding: '0.5rem 0',
	}),

	loginControlErrorP: css({
		fontSize: '1.1rem',
		margin: '0',
		color: theme.colors.red.dark,
	}),

	loginControlErrorFormP: css({
		fontSize: '1.1rem',
		marginTop: '1rem',
		color: theme.colors.red.dark,
		textAlign: 'center',
	}),

	loginControls: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	}),

	loginActions: css({
		display: 'flex',
		justifyContent: 'flex-start',
		gap: '1rem',
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			flexDirection: 'column',
		},
	}),

	loginButton: css({
		fontSize: '1.6rem',
		color: theme.colors.red.strong,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.4s',
		'&:hover, &:active': { backgroundColor: theme.colors.white.light },
	}),

	loginSubmit: css({
		border: `1px solid ${theme.colors.red.main}`,
		backgroundColor: theme.colors.red.main,
		color: theme.colors.white.main,
		transition: '0.4s',
		'&:hover, &:active': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
	}),
}
