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
	}),

	navbarLogo: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	}),

	navbarLogoImg: css({
		width: '90px',
		height: '90px',

		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '60px',
			height: '60px',
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
			fontSize: '4rem',
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

	navbarMenuAActive: css({
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
			gap: '2rem',
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
			padding: '0 2rem',
			'> img': {
				filter: 'brightness(0%)',
			},
		},
	}),

	navbarDropdown: css({
		display: 'none',
		'@media (max-width: 768px)': {
			display: 'block',
			width: '65px',
			transition: '0.4s',
		},
	}),

	navbarBtnMobile: css({
		display: 'none',
	}),

	navbarLinks: css({
		alignItems: 'center',
		gap: '5rem',
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'flex',
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
	}),
	brugerWrapper: css({
		height: '5rem',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '2rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'flex',
		},
	}),

	burgerBars: css({
		height: '3rem',
		width: '3rem',
		border: 'none',
		background: 'transparent',
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'block',
		},

		img: {
			height: '3rem',
		},
	}),
	menuWrapper: css({
		display: 'flex',
		padding: '2rem',
		flexDirection: 'column',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: theme.colors.white.main,
		zIndex: 1000,
	}),
	menuCloseBtn: css({
		position: 'absolute',
		top: '3rem',
		right: '3rem',
		fontSize: '2rem',
		background: 'transparent',
		border: 'none',
	}),

	mobileDivider: css({
		display: 'none',
		flexGrow: 1,
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'flex'
		}
	}),
}
