import { css } from '@emotion/css'

export const styles = {
	heroTextTop: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1rem',
		marginBottom: '2rem',
	}),

	heroTextTopH1: css({
		color: '#0c0b0b',
		fontSize: '5rem',
		fontWeight: '600',
	}),

	heroTextTopHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		backgroundColor: '#0c0b0b',
	}),

	hero: css({
		height: '100vh',
		backgroundImage: 'linear-gradient(to top, rgba(154, 21, 21, 0), rgb(75, 68, 68))',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '10rem',
	}),

	heroText: css({
		display: 'flex',
		flex: '1',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '2rem',
		lineHeight: '1.1',
		textAlign: 'center',
		texttransform: 'uppercase',
	}),

	heroTextP: css({
		color: '#0c0b0b',
		fontSize: '10rem',
		fontWeight: '700',
	}),

	// hero__img--Woman,
	// hero__img--Woman img,
	// hero__img--Man,
	// hero__img--Man img {
	// 	display: flex,
	// 	flex: 1,
	// 	alignItems: center,
	// 	justifyContent: center,
	// 	overflow: hidden,
	// }

	heroBtn: css({
		fontSize: '1.6rem',
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		border: '1px solid #ce1446',
		backgroundColor: '#ce1446',
		color: '#f8f8ff',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#ce1446' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#ce1446' },
	}),
}
