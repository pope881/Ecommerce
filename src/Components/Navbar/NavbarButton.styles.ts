import { css } from '@emotion/css'

export const styles = {
	navbarBtnCart: css({
		cursor: 'pointer',
		border: 'none',
		backgroundColor: '#2c0d00',
		color: '#f8f8ff',
		padding: '0.9rem 4rem',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: '25px',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#672e17' },
		'&:active': { backgroundColor: '#672e17' },
	}),

	navbarBtnCartSpan: css({
		fontSize: '1.6rem',
	}),

	navbarIcon: css({
		width: '2rem',
		height: '2rem',
		marginRight: '0.5rem',
	}),

	navbarBadge: css({
		backgroundColor: '#b94517',
		padding: '0.25rem 1rem',
		borderRadius: '25px',
		marginLeft: '1rem',
	}),

	// navbar__btnCart:hover .badge,
	// navbar__btnCart:active .badge {
	// 	backgroundColor: '#92320c',
	// }

	navbarBump: css({
		animation: 'bump 300ms ease-out',
	}),

	navbarBtnBasket: css({
		display: 'none',
	}),

	// @keyframes bump {
	// 	0% {
	// 		transform: scale(1),
	// 	}
	// 	10% {
	// 		transform: scale(0.9),
	// 	}
	// 	30% {
	// 		transform: scale(1.1),
	// 	}
	// 	50% {
	// 		transform: scale(1.15),
	// 	}
	// 	100% {
	// 		transform: scale(1),
	// 	}
	// }

	// @media (max-width: 568px) {
	// 	navbar__btnBasket {
	// 		display: block,
	// 		width: 40px,
	// 	}
	// 	navbar__btnCart {
	// 		display: none,
	// 	}
	// }
}
