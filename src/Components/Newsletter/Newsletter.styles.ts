import { css } from '@emotion/css'

export const styles = {
	newsletter: css({
		borderRadius: '25px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 auto',
		padding: '5rem 0',
		marginBottom: '10rem',
		background: 'linear-gradient(180deg, #ce1446 0%, #e1ffea22 70%)',
		gap: '3rem',
	}),

	newsletterH1: css({
		color: '#0c0b0b',
		fontSize: '6rem',
		fontWeight: '600',
		textAlign: 'center',
	}),

	newsletterP: css({
		color: '#0c0b0b',
		fontSize: '2rem',
	}),

	newsletterControl: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: '#f8f8ff',
		borderRadius: '25px',
		border: '1px solid #e2e2e2',
		width: '100%',
		maxWidth: '500px',
	}),

	newsletterControlInput: css({
		width: '100%',
		maxWidth: '500px',
		marginLeft: '3rem',
		border: 'none',
		outline: 'none',
		color: '#616161',
		fontSize: '1.6rem',
		paddingRight: '1rem',
		background: 'none',
	}),

	newsletterControlButton: css({
		padding: '1rem 4rem',
		borderRadius: '25px',
		backgroundColor: '#0c0b0b',
		color: '#f8f8ff',
		fontSize: '1.6rem',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#0c0b0b' },
		'&:actice': { backgroundColor: '#f8f8ff', color: '#0c0b0b' },
	}),

	newsletterInvalidP: css({
		color: '#aa0b20',
		fontSize: '1.2rem',
		textAlign: 'center',
		marginTop: '1rem',
	}),

	newsletterForm: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	}),
}
