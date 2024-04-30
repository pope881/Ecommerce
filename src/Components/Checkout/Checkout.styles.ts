import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	form: css({
		margin: '1rem 0',
	}),

	formControl: css({
		marginBottom: '0.5rem',
	}),

	formControlLabel: css({
		fontSize: '1.6rem',
		fontWeight: 'bold',
		marginBottom: '0.25rem ',
		display: 'block',
	}),

	formControlInput: css({
		fontSize: '1.6rem',
		border: `1px solid ${theme.colors.grey.strong}`,
		borderRadius: '4px',
		width: '50rem',
		maxWidth: '100% ',
		background: theme.colors.grey.strong,
	}),

	formActions: css({
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '1rem',
	}),

	formActionsButton: css({
		fontSize: '1.6rem',
		color: theme.colors.red.main,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		'&:hover, &:active': { backgroundColor: theme.colors.white.light },
	}),

	formSubmit: css({
		backgroundColor: theme.colors.red.main,
		border: `1px solid ${theme.colors.red.main}`,
		color: theme.colors.white.main,
		fontWeight: '600',
		'&:hover, &:active': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
	}),

	invalidP: css({
		color: theme.colors.red.dark,
		fontSize: '1.2rem',
	}),

	invalidInput: css({
		borderColor: theme.colors.red.dark,
	}),
}
