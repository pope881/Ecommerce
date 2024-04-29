import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	navbar: css({
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '1%',
		borderBottom: `1px solid ${theme.colors.mainBlack}`,
		backgroundColor: `${theme.colors.mainWhite}`,
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
	}),

	navbarLogoA: css({
		textDecoration: 'none',
	}),

	navbarMenu: css({
		display: 'flex',
		alignItems: 'center',
		listStyle: 'none',
		gap: '5rem',
		color: '#626262',
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
		color: `${theme.colors.mainBlack}`,
		fontWeight: '500',
		transition: '0.2s',
		'&:hover': { color: `${theme.colors.mainRed}` },
		'&:active': { color: `${theme.colors.mainRed}` },
	}),

	navbarMenuAActive: css({
		borderBottom: '3px solid #ce1446',
		textDecoration: 'none',
		color: `${theme.colors.mainRed}`,
		fontWeight: '500',
	}),

	navbarLoginCart: css({
		display: 'flex',
		alignItems: 'center',
		gap: '4.5rem',
	}),

	navbarLoginCartA: css({
		textDecoration: 'none',
	}),

	navbarBtn: css({
		fontSize: '1.6rem',
		cursor: 'pointer',
		padding: '1rem 4rem',
		borderRadius: '25px',
		backgroundColor: `${theme.colors.mainBlack}`,
		border: `1px solid ${theme.colors.mainBlack}`,
		color: `${theme.colors.mainWhite}`,
		transition: '0.3s',
		'&:hover, &:active': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainBlack}` },
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
		display: 'flex',
		alignItems: 'center',
		gap: '5rem',
	}),

	// @media (max-width: 768px) {
	//     navbarDropdown {
	//         display: 'block',
	//         width: '65px',
	//         transition: '0.4s',
	//     }

	//     navbarMenu {
	//         display: 'none',
	//         height: '100px',
	//         width: '100%',
	//         position: 'absolute',
	//         backgroundColor: `${theme.colors.mainWhite}`,
	//         /* background-color: blue, */
	//         justifyContent: 'center',
	//         top: '40%',
	//         fontSize: '3rem',
	//     }

	//     navbarMenuLi {
	//         fontSize: '4rem',
	//     }

	//     navbarMenuVisible {
	//         display: 'flex',
	//         flexDirection: 'column',
	//     }

	//     navbarDropdownOpen {
	//         transform: 'rotate(90deg)',
	//     }
	// }

	// @media (max-width: 568px) {
	//     navbar {
	//         padding: '0.5%',
	//         justifyContent: 'space-around',
	//         backgroundImage: 'radial-gradient(circle, rgba(252, 89, 168, 1) 20%, rgba(86, 41, 42, 0) 100%)',
	//     }

	//     navbarLogoImg {
	//         transform: 'scale(0.6)',
	//     }

	//     navbarBtn {
	//         display: 'none',
	//     }

	//     navbarBtnMobile {
	//         display: 'block',
	//         width: '40px',
	//     }
	// }
}
