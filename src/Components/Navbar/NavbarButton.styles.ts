import { css } from '@emotion/css'
import { keyframes } from '@emotion/react'
import { theme } from '../../theme'

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
		backgroundColor: theme.colors.mainBlack,
		color: theme.colors.mainWhite,
		padding: '0 4rem',
		height: '5rem',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: '25px',
		transition: '0.4s',
		'&:hover': { backgroundColor: theme.colors.mainRed },
		'&:active': { backgroundColor: theme.colors.mainRed },

		[`@media (max-width: ${theme.breakpoints.md})`]: {
			background: 'transparent',
			color: theme.colors.mainBlack,
			padding: '0 2rem',
		},
	}),

	navbarBtnCartSpan: css({
		fontSize: '1.6rem',

		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'none',
		},
	}),

	navbarIcon: css({
		width: '2rem',
		height: '2rem',
		marginRight: '0.5rem',
		color: 'blue',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			filter: 'brightness(0%)',
		},
	}),

	navbarBadge: (hoverButton: boolean) =>
		css({
			fontSize: '1.6rem',
			backgroundColor: hoverButton ? theme.colors.mainBlack : theme.colors.mainRed,
			padding: '0.25rem 1rem',
			borderRadius: '25px',
			marginLeft: '1rem',
			fontWeight: 'bold',
			transition: '0.4s',
			[`@media (max-width: ${theme.breakpoints.md})`]: {
				color: hoverButton ? theme.colors.mainWhite : theme.colors.mainBlack,
			},
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
