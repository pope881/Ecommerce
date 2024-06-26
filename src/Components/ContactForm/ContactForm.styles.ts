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
		backgroundColor: theme.colors.black.main,
	}),

	contactHeading: css({
		maxWidth: '800px',
	}),

	contactHeadingH1: css({
		fontSize: '3.6rem',
		fontWeight: '700',
		color: theme.colors.white.main,
		textAlign: 'center',
		marginBottom: '3rem',
	}),

	contactHeadingH4: css({
		color: theme.colors.red.main,
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	contactHeadingP: css({
		fontSize: '1.6rem',
		fontWeight: '300',
		color: theme.colors.white.main,
		marginBottom: '3rem',
	}),

	contactHeadingHr: css({
		width: '100%',
		border: 'none',
		height: '2px',
		backgroundColor: theme.colors.red.main,
		marginBottom: '5rem',
	}),

	contactContainer: css({
		width: '100%',
		display: 'grid',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '3rem',
		gridTemplateColumns: '1fr 450px 450px',
		columnGap: '2rem',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			gridTemplateColumns: '1fr 1fr',
		},
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridTemplateColumns: '1fr',
			rowGap: '2rem',
		},
	}),

	contactMapContainerIframe: css({
		width: '400px',
		height: '300px',
		borderRadius: '16px',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			width: '100%',
			gridRow: 2,
			gridColumn: 1,
		},
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '100%',
			gridRow: 2,
			gridColumn: 1,
		},
	}),

	contactInfo: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			gridRow: 1,
			gridColumn: 1,
		},
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
		background: theme.colors.white.main,
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
		color: theme.colors.white.main,
		flexDirection: 'column',
		fontWeight: '300',
	}),

	contactInfoTextH3: css({
		fontSize: '2rem',
		color: theme.colors.red.main,
	}),

	contactInfoTextA: css({
		textDecoration: 'none',
		fontSize: '1.6rem',
		color: theme.colors.white.main,
	}),

	contactForm: css({
		padding: '4rem',
		background: theme.colors.white.main,
		borderRadius: '16px',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			width: '100%',
			gridRow: '1 / 3',
			gridColumn: 2,
			height: '100%',
		},
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '100%',
			gridRow: 3,
			gridColumn: 1,
			height: '100%',
		},
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
		backgroundColor: theme.colors.grey.strong,
		color: theme.colors.black.main,
		border: `1px solid ${theme.colors.black.main}`,
		outline: 'none',
		resize: 'none',
	}),

	contactInputBoxTextarea: css({
		width: '100%',
		fontSize: '1.6rem',
		margin: '1rem 0',
		padding: '0.5rem',
		borderRadius: '4px',
		backgroundColor: theme.colors.grey.strong,
		color: theme.colors.black.main,
		border: `1px solid ${theme.colors.black.main}`,
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
			color: isClicked ? theme.colors.red.dark : theme.colors.grey.main,
			fontSize: isClicked ? '1.3rem' : '1.6rem',
			transform: isClicked ? 'translateY(-24px)' : 'translateY(0px)',
			[`@media (max-width: ${theme.breakpoints.xs})`]: {
				transform: isClicked ? 'translateY(-26px)' : 'translateY(0px)',
				fontSize: isClicked ? '1rem' : '1.4rem',
			},
		}),

	contactFormActions: css({
		display: 'flex',
		justifyContent: 'flex-start',
		gap: '1rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			flexDirection: 'column',
		},
	}),

	contactFormActionsButton: css({
		fontSize: '1.6rem',
		color: theme.colors.red.strong,
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.4s',
		'&:hover, &:active ': { backgroundColor: theme.colors.white.light },
	}),

	contactFormActionsSubmit: css({
		border: `1px solid ${theme.colors.red.main}`,
		backgroundColor: theme.colors.red.main,
		color: theme.colors.white.main,
		transition: '0.4s',
		'&:hover, &:active': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
	}),
}
