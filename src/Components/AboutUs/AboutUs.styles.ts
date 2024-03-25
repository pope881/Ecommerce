import { css } from '@emotion/css'

export const styles = {
	about: css({
		padding: '4% 10%',
		width: '100%',
		height: '100vh',
		backgroundColor: '#0c0b0b',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gap: '4rem',
	}),

	aboutMainImgImg: css({
		maxWidth: '100%',
		width: '560px',
		height: 'auto',
	}),

	aboutText: css({
		padding: '6% 0%',
	}),

	aboutTextH4: css({
		color: '#ce1446',
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	aboutTextH1: css({
		color: '#f8f8ff',
		fontSize: '3.6rem',
		textTransform: 'capitalize',
		fontWeight: '700',
		lineHeight: '4.6rem',
		marginBottom: '3rem',
	}),

	aboutTextHr: css({
		width: '30%',
		border: 'none',
		height: '2px',
		backgroundColor: '#ce1446',
		marginBottom: '5rem',
	}),

	aboutTextP: css({
		minWidth: '600px',
		color: '#f8f8ff',
		fontSize: '1.6rem',
		fontWeight: '400',
		lineHeight: '1.7',
		marginBottom: '6rem',
	}),

	aboutDescriptions: css({
		display: 'flex',
	}),

	aboutDescription: css({
		marginRight: '6rem',
	}),

	aboutDescriptionH3: css({
		color: '#ce1446',
		fontSize: '6rem',
		fontWeight: '700',
	}),

	aboutDescriptionH5: css({
		color: '#f8f8ff',
		fontSize: '1.8rem',
		fontWeight: '500',
		lineHeight: '1.8rem',
	}),

	// @media (max-width: 1385px) {
	//     aboutUs {
	//         padding: '4% 4%',
	//         transition: '0.3s',
	//     }
	//     about__mainImg img {
	//         width: '500px',
	//         height: 'auto',
	//         transition: '0.3s',
	//     }
	// }

	// @media (max-width: 1240px) {
	//     about__text h1 {
	//         fontSize: '3rem',
	//         transition: '0.3s',
	//     }
	// }

	// @media (max-width: 1040px) {
	//     aboutUs {
	//         gridTemplateColumns: '1fr',
	//         height: '100%',
	//     }
	//     about__mainImg img {
	//         paddingTop: '4rem',
	//     }
	// }
}
