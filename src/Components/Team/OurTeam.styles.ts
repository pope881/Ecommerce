import { css } from '@emotion/css'

export const styles = {
	team: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0c0b0b',
		width: '100%',
		padding: '6% 10% 10%',
	}),

	teamText: css({
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
	}),

	teamTextH4: css({
		color: '#ce1446',
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '10px',
	}),

	teamTextH1: css({
		color: '#f8f8ff',
		fontSize: '3.6rem',
		textTransform: 'capitalize',
		fontWeight: '700',
		lineHeight: '46px',
		marginBottom: '3rem',
	}),

	teamTextHr: css({
		width: '30%',
		border: 'none',
		height: '2px',
		backgroundColor: '#ce1446',
		marginBottom: '50px',
	}),

	teamTextP: css({
		minWidth: '600px',
		color: '#f8f8ff',
		fontSize: '1.5rem',
		fontWeight: '400',
		lineHeight: '1.7',
		marginBottom: '6rem',
	}),

	teamContainer: css({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: 'auto',
		backgroundColor: '#0c0b0b',
		gap: '6rem',
		alignItems: 'center',
		textAlign: 'center',
		width: '100%',
		margin: '0 auto',
	}),
	/* 
@media (max-width: 1150px) {
	team__container {
		gridTemplateColumns: 1fr 1fr,
		width: -moz-fit-content,
		width: fit-content,
	}
}

@media (max-width: 800px) {
	team__container {
		gridTemplateColumns: 1fr,
		width: -moz-fit-content,
		width: fit-content,
	}
} */

	teamCard: css({
		position: 'relative',
		width: '35rem',
		height: '45rem',
		borderRadius: '2rem',
		textAlign: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		color: '#f8f8ff',
		boxShadow: '4px 4px 30px 0px #f8f8ff',
		overflow: 'hidden',
	}),

	teamBtn: css({
		position: 'absolute',
		top: '10px',
		right: '10px',
		padding: '1rem',
		background: 'none',
		border: 'none',
		color: '#ce1446',
		fontSize: '5rem',
		textShadow: '2px 2px 5px rgb(0, 0, 0)',
		cursor: 'crosshair',
		zIndex: '10',
		'&:hover ~ teamCardText': { clipPath: 'circle(120% at 50% 90%)' },
	}),

	// team__btn:hover ~ team__cardText {
	// 	clip-path: circle(120% at 50% 90%),
	// }

	/* 
@media (max-width: 400px) {
	team__card {
		width: 100%,
	}
} */

	teamCardText: css({
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		color: '#f8f8ff',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		padding: '5rem 3rem',
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		clipPath: 'circle(0 at 50% 90%)',
		transition: '0.8s',
	}),

	teamCardTextH1: css({
		fontSize: '4rem',
		color: '#ce1446',
	}),

	teamCardTextH2: css({
		fontSize: '1.6rem',
		marginBottom: '0.8rem',
		color: '#f8f8ff',
	}),
}
