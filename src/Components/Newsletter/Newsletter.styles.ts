import { css } from '@emotion/css'

export const styles = {
	newsletter: css({
		borderRadius: '25px',
		width: '65%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0 auto',
		padding: '5rem 14rem',
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
		border: '1px solid #e3e3e3',
	}),

	newsletterControlInput: css({
		width: '500px',
		marginLeft: '3rem',
		border: 'none',
		outline: 'none',
		color: '#616161',
		fontSize: '1.6rem',
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

	// newsletter__control button:hover,
	// newsletter__control button:active {
	// 	backgroundColor:' #f8f8ff',
	// 	color: '#0c0b0b',
	// }

	newsletterInvalidP: css({
		color: '#aa0b20',
		fontSize: '1.2rem',
		textAlign: 'center',
		marginTop: '1rem',
	}),
}
