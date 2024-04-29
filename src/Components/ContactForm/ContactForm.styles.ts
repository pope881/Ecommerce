import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	contact: css({
		minHeight: '100vh',
		padding: '4% 8%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: `${theme.colors.mainBlack}`,
	}),

	contactHeading: css({
		maxWidth: '800px',
	}),

	contactHeadingH1: css({
		fontSize: '3.6rem',
		fontWeight: '700',
		color: `${theme.colors.mainWhite}`,
		textAlign: 'center',
		marginBottom: '3rem',
	}),

	contactHeadingH4: css({
		color: `${theme.colors.mainRed}`,
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	contactHeadingP: css({
		fontSize: '1.6rem',
		fontWeight: '300',
		color: `${theme.colors.mainWhite}`,
		marginBottom: '3rem',
	}),

	contactHeadingHr: css({
		width: '100%',
		border: 'none',
		height: '2px',
		backgroundColor: `${theme.colors.mainRed}`,
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
		background: `${theme.colors.mainWhite}`,
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
		color: `${theme.colors.mainWhite}`,
		flexDirection: 'column',
		fontWeight: '300',
	}),

	contactInfoTextH3: css({
		fontSize: '2rem',
		color: `${theme.colors.mainRed}`,
	}),

	contactInfoTextA: css({
		textDecoration: 'none',
		fontSize: '1.6rem',
		color: `${theme.colors.mainWhite}`,
	}),

	contactForm: css({
		width: '40%',
		padding: '4rem',
		background: `${theme.colors.mainWhite}`,
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
		backgroundColor: `${theme.colors.strongGrey}`,
		color: `${theme.colors.mainBlack}`,
		border: `1px solid ${theme.colors.mainBlack}`,
		outline: 'none',
		resize: 'none',
	}),

	contactInputBoxTextarea: css({
		width: '100%',
		fontSize: '1.6rem',
		margin: '1rem 0',
		padding: '0.5rem',
		borderRadius: '4px',
		backgroundColor: `${theme.colors.strongGrey}`,
		color: `${theme.colors.mainBlack}`,
		border: `1px solid ${theme.colors.mainBlack}`,
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
			color: isClicked ? `${theme.colors.darkRed}` : `${theme.colors.mainGrey}`,
			fontSize: isClicked ? '1.3rem' : '1.6rem',
			transform: isClicked ? 'translateY(-24px)' : 'translateY(0px)',
		}),

	contactFormActions: css({
		display: 'flex',
		justifyContent: 'flex-start',
		gap: '1rem',
	}),

	contactFormActionsButton: css({
		fontSize: '1.6rem',
		color: `${theme.colors.strongRed}`,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.4s',
		'&:hover': { backgroundColor: `${theme.colors.lightWhite}` },
		'&:active': { backgroundColor: `${theme.colors.lightWhite}` },
	}),

	contactFormActionsSubmit: css({
		border: '1px solid #ce1446',
		backgroundColor: `${theme.colors.mainRed}`,
		color: `${theme.colors.mainWhite}`,
		transition: '0.4s',
		'&:hover': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
		'&:active': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
	}),
}
