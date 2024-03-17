import { css } from '@emotion/css'

export const styles = {
	offers: css({
		width: '75%',
		display: 'flex',
		margin: 'auto',
		padding: '0rem 14rem',
		marginBottom: '10rem',
		background: 'linear-gradient(180deg, #ce1446 0%, #e1ffea22 90%)',
		borderRadius: '25px',
	}),

	offersLeft: css({
		/* flex: 1, */
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}),

	offersLeftH1: css({
		color: '#0c0b0b',
		fontSize: '8rem',
		fontWeight: '600',
		textAlign: 'center',
	}),

	offersLeftP: css({
		color: '#0c0b0b',
		fontSize: '2.2rem',
		fontWeight: '600',
	}),

	offersLeftButton: css({
		fontSize: '1.6rem',
		border: '1px solid #ce1446',
		backgroundColor: '#ce1446',
		color: '#f8f8ff',
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		marginTop: '2rem',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#ce1446' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#ce1446' },
	}),

	offersRight: css({
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: '5rem',
	}),
}
