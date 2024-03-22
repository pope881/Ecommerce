import { css } from '@emotion/css'

export const styles = {
	footer: css({
		border: '1px solid rgba(0, 0, 0, 0.15)',
		width: '100%',
		height: 'auto',
		padding: '3rem 8rem',
		background: '#f8f8ff',
	}),

	footerContainer: css({
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '2fr 1fr 1fr 1fr',
		gridGap: '3rem',
	}),

	footerAboutUs: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	}),

	footerLogo: css({
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: '1rem',
	}),

	footerAboutUsImg: css({
		width: '100px',
		height: '100px',
	}),

	footerSectionH2: css({
		fontSize: '2rem',
		color: '#0c0b0b',
		fontWeight: '600',
		marginBottom: '1.6rem',
	}),

	footerQualityText: css({
		fontSize: '1.6rem',
		color: '#ce1446',
		fontStyle: 'italic',
		textShadow: '0px 0px 2px #ce1446',
	}),

	footerText: css({
		fontSize: '1.4rem',
		fontStyle: 'italic',
	}),

	footerQuicklinksUlLi: css({
		fontSize: '1.4rem',
		listStyle: 'none',
		textDecoration: 'none',
		marginBottom: '1rem',
		transition: '0.3s',
		maxWidth: '200px',
		'&:hover': { color: '#ce1446', transform: 'scale(1.2)' },
	}),

	footerQuicklinksUlA: css({
		textDecoration: 'none',
		color: '#0c0b0b',
	}),

	footerContactInfoLi: css({
		display: 'grid',
		gridTemplateColumns: '30px 1fr',
		marginBottom: '1.6rem',
	}),

	footerContactInfoLiSpan: css({
		color: '#0c0b0b',
		fontSize: '1.6rem',
	}),

	footerContactInfoLiA: css({
		color: '#0c0b0b',
		textDecoration: 'none',
		fontSize: '1.6rem',
	}),

	copyrightText: css({
		width: '100%',
		fontSize: '1.6rem',
		background: '#f8f8ff',
		padding: '2rem 10rem 3rem',
		textAlign: 'center',
		color: '#0c0b0b',
		borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
	}),

	// @media (max-width: 991px) {
	//     footer {
	//         padding: '4rem',
	//     }

	//     footerContainer {
	//         width: '100%',
	//         display: 'grid',
	//         gridTemplateColumns: 'repeat(2, 1fr)',
	//         gridGap: '2rem',
	//     }

	//     copyrightText {
	//         padding: '2rem 4rem 3rem',
	//     }
	// }

	// @media (max-width: 768px) {
	//     footerContainer {
	//         width: '100%',
	//         display: 'grid',
	//         gridTemplateColumns: 'repeat(1, 1fr)',
	//         gridGap: '2rem',
	//     }
	// }
}
