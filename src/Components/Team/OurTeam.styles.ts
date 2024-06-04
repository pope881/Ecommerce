import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	team: css({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.black.main,
		width: '100%',
		padding: '6% 10% 10%',
	}),

	teamText: css({
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
	}),

	teamTextH4: css({
		color: theme.colors.red.main,
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	teamTextH1: css({
		color: theme.colors.white.main,
		fontSize: '3.6rem',
		textTransform: 'capitalize',
		fontWeight: '700',
		lineHeight: '46px',
		marginBottom: '3rem',
	}),

	teamTextHr: css({
		width: '40%',
		border: 'none',
		height: '2px',
		backgroundColor: theme.colors.red.main,
		marginBottom: '50px',
	}),

	teamTextP: css({
		color: theme.colors.white.main,
		fontSize: '1.5rem',
		fontWeight: '400',
		lineHeight: '1.7',
		marginBottom: '6rem',
	}),

	teamContainer: css({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: 'auto',
		backgroundColor: theme.colors.black.main,
		gap: '6rem',
		alignItems: 'center',
		textAlign: 'center',
		width: '100%',
		margin: '0 auto',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridTemplateColumns: '1fr 1fr',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			gridTemplateColumns: '1fr',
		},
	}),

	teamCard: css({
		position: 'relative',
		height: '45rem',
		borderRadius: '2rem',
		textAlign: 'center',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		color: theme.colors.white.main,
		boxShadow: `4px 4px 30px 0px ${theme.colors.white.main}`,
		overflow: 'hidden',
	}),

	teamCardImg: css({
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}),

	teamBtn: css({
		position: 'absolute',
		top: '10px',
		right: '10px',
		padding: '1rem',
		background: 'none',
		border: 'none',
		color: theme.colors.red.main,
		fontSize: '5rem',
		textShadow: '2px 2px 5px rgb(0, 0, 0)',
		cursor: 'crosshair',
		zIndex: '10',
	}),

	teamCardText: (isHovered: boolean) =>
		css({
			position: 'absolute',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			color: theme.colors.white.main,
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			padding: '5rem 3rem',
			backgroundColor: 'rgba(0, 0, 0, 0.8)',
			clipPath: isHovered ? 'circle(120% at 50% 90%)' : 'circle(0 at 50% 90%)',
			transition: '0.8s',
		}),

	teamCardTextH1: css({
		fontSize: '4rem',
		color: theme.colors.red.main,
	}),

	teamCardTextH2: css({
		fontSize: '1.6rem',
		marginBottom: '0.8rem',
		color: theme.colors.white.main,
	}),
}
