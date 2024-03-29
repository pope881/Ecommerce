import { css } from '@emotion/css'

export const styles = {
	navbar: css({
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '1%',
		borderBottom: '1px solid #0c0b0b',
		backgroundColor: '#f8f8ff',
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
	}),

	navbarMenuA: css({
		textDecoration: 'none',
		color: '#0c0b0b',
		fontWeight: '500',
		transition: '0.2s',
		'&:hover': { color: '#ce1446' },
		'&:active': { color: '#ce1446' },
	}),

	navbarMenuAActive: css({
		borderBottom: '3px solid #ce1446',
		textDecoration: 'none',
		color: '#ce1446',
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
		backgroundColor: '#0c0b0b',
		border: '1px solid #0c0b0b',
		color: '#f8f8ff',
		transition: '0.3s',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#0c0b0b' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#0c0b0b' },
	}),

	navbarDropdown: css({
		display: 'none',
	}),

	navbarBtnMobile: css({
		display: 'none',
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
	//         backgroundColor: '#f8f8ff',
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
