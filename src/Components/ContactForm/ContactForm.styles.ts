import { css } from '@emotion/css'

export const styles = {
	contact: css({
		minHeight: '100vh',
		padding: '4% 8%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#0c0b0b',
	}),

	contactHeading: css({
		maxWidth: '800px',
	}),

	contactHeadingH1: css({
		fontSize: '3.6rem',
		fontWeight: '700',
		color: '#f8f8ff',
		textAlign: 'center',
		marginBottom: '3rem',
	}),

	contactHeadingH4: css({
		color: '#ce1446',
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	contactHeadingP: css({
		fontSize: '1.6rem',
		fontWeight: '300',
		color: '#f8f8ff',
		marginBottom: '3rem',
	}),

	contactHeadingHr: css({
		width: '100%',
		border: 'none',
		height: '2px',
		backgroundColor: '#ce1446',
		marginBottom: '5rem',
	}),

	contactContainer: css({
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '3rem',
	}),

	contactMapContainerIframe: css({
		width: '400px',
		height: '300px',
		borderRadius: '16px',
	}),

	contactInfo: css({
		width: '20%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}),

	contactInfoBox: css({
		position: 'relative',
		padding: '2rem 0',
		display: 'flex',
	}),

	contactInfoTextP: css({
		fontSize: '1.6rem',
	}),

	contactIcon: css({
		minWidth: '60px',
		height: '60px',
		background: '#f8f8ff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%',
		fontSize: '4rem',
	}),

	contactInfoText: css({
		display: 'flex',
		marginLeft: '2rem',
		fontSize: '1.6rem',
		color: '#f8f8ff',
		flexDirection: 'column',
		fontWeight: '300',
	}),

	contactInfoTextH3: css({
		fontSize: '2rem',
		fontWeight: '500',
		color: '#ce1446',
	}),

	contactInfoTextA: css({
		textDecoration: 'none',
		fontSize: '1.6rem',
		color: '#f8f8ff',
	}),

	contactForm: css({
		width: '40%',
		padding: '4rem',
		background: '#f8f8ff',
		borderRadius: '16px',
	}),

	contactFormH2: css({
		fontSize: '3rem',
		fontWeight: '700',
	}),

	contactInputBox: css({
		position: 'relative',
		width: '100%',
		marginTop: '1rem',
	}),

	contactInputBoxInput: css({
		width: '100%',
		margin: '1rem 0',
		padding: '0.5rem',
		fontSize: '1.6rem',
		borderRadius: '4px',
		backgroundColor: '#869999',
		color: '#0c0b0b',
		border: '1px solid #0c0b0b',
		outline: 'none',
		resize: 'none',
	}),

	contactInputBoxTextarea: css({
		width: '100%',
		fontSize: '1.6rem',
		margin: '1rem 0',
		padding: '0.5rem',
		borderRadius: '4px',
		backgroundColor: '#869999',
		color: '#0c0b0b',
		border: '1px solid #0c0b0b',
		outline: 'none',
		resize: 'none',
	}),

	contactInputBoxSpan: (isClicked: boolean) =>
		css({
			position: 'absolute',
			left: '0',
			padding: '0.5rem 0',
			margin: '1rem 0',
			pointerEvents: 'none',
			transition: '0.5s',
			color: isClicked ? '#aa0b20' : '#666',
			fontSize: isClicked ? '1.2rem' : '1.6rem',
			transform: isClicked ? 'translateY(-20px)' : 'translateY(0px)',
		}),

	// contact__inputBox input:focus ~ span,
	// contact__inputBox input:valid ~ span,
	// contact__inputBox textarea:focus ~ span,
	// contact__inputBox textarea:valid ~ span {
	//     color: '#aa0b20',
	//     fontSize: '1.2rem',
	//     transform: 'translateY(-20px)',
	// }

	contactFormActions: css({
		display: 'flex',
		justifyContent: 'flex-start',
		gap: '1rem',
	}),

	contactFormActionsButton: css({
		fontSize: '1.6rem',
		color: '#5a1a01',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#ffe6dc' },
		'&:active': { backgroundColor: '#ffe6dc' },
	}),

	contactFormActionsSubmit: css({
		border: '1px solid #ce1446',
		backgroundColor: '#ce1446',
		color: '#f8f8ff',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#ce1446' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#ce1446' },
	}),

	// @media (max-width: 991px) {
	//     contact {
	//         padding: '50px',
	//     }
	//     contactContainer {
	//         flexDirection: 'column',
	//     }
	//     contactInfo {
	//         marginBottom: '40px',
	//     }
	//     contactInfo,
	//     contactForm {
	//         width: '100%',
	//     }
	// }
}
