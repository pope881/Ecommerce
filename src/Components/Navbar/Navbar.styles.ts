import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	navbar: css({
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '1%',
		borderBottom: `1px solid ${theme.colors.black.main}`,
		backgroundColor: theme.colors.white.main,
		minHeight: '15vh',
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			minHeight: '10vh',
		},
	}),

	navbarLogo: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	}),

	navbarLogoImg: css({
		width: '70px',
		height: '70px',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '50px',
			height: '50px',
			marginRight: 'auto',
		},
	}),

	navbarLogoA: css({
		textDecoration: 'none',
	}),

	navbarMenu: css({
		display: 'flex',
		alignItems: 'center',
		listStyle: 'none',
		gap: '5rem',
		fontWeight: '500',
	}),

	navbarMenuLi: css({
		fontSize: '3rem',
		cursor: 'pointer',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '6rem',
			marginLeft: '2rem',
		},
	}),

	navbarMenuA: css({
		textDecoration: 'none',
		color: theme.colors.black.main,
		fontWeight: '500',
		transition: '0.2s',
		'&:hover': { color: theme.colors.red.main },
		'&:active': { color: theme.colors.red.main },
	}),

	navbarMenuActive: css({
		borderBottom: `3px solid ${theme.colors.red.main}`,
		textDecoration: 'none',
		color: theme.colors.red.main,
		fontWeight: '500',
	}),

	navbarLoginCart: css({
		display: 'flex',
		alignItems: 'center',
		gap: '4.5rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gap: '1rem',
		},
	}),

	navbarLoginCartA: css({
		textDecoration: 'none',
	}),

	navbarBtn: css({
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
		padding: '0 4rem',
		height: '5rem',
		borderRadius: '25px',
		backgroundColor: theme.colors.black.main,
		border: `1px solid ${theme.colors.black.main}`,
		color: theme.colors.white.main,
		transition: '0.3s',
		'> img': {
			filter: 'brightness(0%) invert(1)',
		},
		'&:hover, &:active': {
			backgroundColor: theme.colors.white.main,
			color: theme.colors.black.main,
			img: {
				filter: 'brightness(100%)',
			},
		},
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			background: 'transparent',
			borderColor: 'transparent',
			padding: '0 0.5rem',
			'> img': {
				filter: 'brightness(0%)',
			},
		},
	}),

	navbarLinks: css({
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'flex',
			alignItems: 'center',
			gap: '5rem',
			ul: {
				flexDirection: 'column',
				alignItems: 'flex-start',
			},
		},
	}),

	navbarLinksDesktop: css({
		display: 'flex',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'none',
		},
	}),

	navbarAuthBtn: css({
		fontSize: '1.6rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'none',
		},
	}),

	navbarAuthIcon: css({
		height: '2rem',
		filter: 'brightness(100%)',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			height: '3.5rem',
		},
	}),
	brugerWrapper: css({
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: '2rem',
			height: '5rem',
		},
	}),

	burgerBarsBtn: css({
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'block',
			height: '4rem',
			width: '4rem',
			border: 'none',
			background: 'transparent',
			cursor: 'pointer',
		},
		img: {
			height: '4rem',
		},
	}),
	burgerMenuWrapper: css({
		position: 'fixed',
		display: 'flex',
		flexDirection: 'column',
		padding: '2rem',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: theme.colors.white.main,
		zIndex: 1000,
	}),
	burgerMenuCloseBtn: css({
		position: 'absolute',
		top: '4rem',
		right: '5rem',
		background: 'transparent',
		border: 'none',
	}),

	navbarMobileDivider: css({
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'flex',
			flexGrow: 1,
		},
	}),

	burgerMenuCrossIcon: css({
		width: '50px',
		height: '50px',
		cursor: 'pointer',
	}),
}
