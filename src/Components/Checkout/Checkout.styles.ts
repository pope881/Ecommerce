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
		border: '1px solid #869999',
		borderRadius: '4px',
		width: '50rem',
		maxWidth: '100% ',
		background: `${theme.colors.strongGrey}`,
	}),

	formActions: css({
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '1rem',
	}),

	formActionsButton: css({
		fontSize: '1.6rem',
		color: `${theme.colors.mainRed}`,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		'&:hover': { backgroundColor: `${theme.colors.lightWhite}` },
		'&:active': { backgroundColor: `${theme.colors.lightWhite}` },
	}),

	formSubmit: css({
		backgroundColor: `${theme.colors.mainRed}`,
		border: '1px solid #ce1446',
		color: `${theme.colors.mainWhite}`,
		fontWeight: '600',
		'&:hover': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
		'&:active': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
	}),

	invalidP: css({
		color: `${theme.colors.darkRed}`,
		fontSize: '1.2rem',
	}),

	invalidInput: css({
		borderColor: `${theme.colors.darkRed}`,
		backgroundColor: '#ffeff1',
	}),
}
