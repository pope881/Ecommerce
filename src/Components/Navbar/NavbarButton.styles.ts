import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'

const bump = keyframes({
	'0%': {
		transform: 'scale(1)',
	},
	'10%': {
		transform: 'scale(0.9)',
	},
	'30%': {
		transform: 'scale(1.1)',
	},
	'50%': {
		transform: 'scale(1.15)',
	},
	'100%': {
		transform: 'scale(1)',
	},
})

export const styles = {
	navbarBtnCart: css({
		cursor: 'pointer',
		border: 'none',
		backgroundColor: '#0c0b0b',
		color: '#f8f8ff',
		padding: '0.9rem 4rem',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: '25px',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#ce1446' },
		'&:active': { backgroundColor: '#ce1446' },
	}),

	navbarBtnCartSpan: css({
		fontSize: '1.6rem',
	}),

	navbarIcon: css({
		width: '2rem',
		height: '2rem',
		marginRight: '0.5rem',
		color: 'blue',
	}),

	navbarBadge: (hoverButton: boolean) =>
		css({
			fontSize: '1.6rem',
			backgroundColor: hoverButton ? '#0c0b0b' : '#ce1446',
			padding: '0.25rem 1rem',
			borderRadius: '25px',
			marginLeft: '1rem',
			fontWeight: 'bold',
			transition: '0.4s',
		}),

	navbarBump: css({
		animationName: bump,
		animationDuration: '0.3s',
		animationTimingFunction: 'ease-out',
	}),

	navbarBtnBasket: css({
		display: 'none',
	}),
}
