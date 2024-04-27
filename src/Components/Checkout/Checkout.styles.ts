import { css } from '@emotion/css'

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
	}),

	formActions: css({
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '1rem',
	}),

	formActionsButton: css({
		fontSize: '1.6rem',
		color: '#ce1446',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		'&:hover': { backgroundColor: '#ffe6dc' },
		'&:active': { backgroundColor: '#ffe6dc' },
	}),

	formSubmit: css({
		backgroundColor: '#ce1446',
		border: '1px solid #ce1446',
		color: ' #f8f8ff ',
		fontWeight: '600',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#ce1446' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#ce1446' },
	}),

	invalidP: css({
		color: '#aa0b20',
		fontSize: '1.2rem',
	}),

	invalidInput: css({
		borderColor: '#aa0b20',
		backgroundColor: ' #ffeff1',
	}),
}
