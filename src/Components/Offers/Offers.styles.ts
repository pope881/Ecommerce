import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	offers: css({
		display: 'flex',
		marginBottom: '10rem',
		background: `linear-gradient(180deg, ${theme.colors.red.main} 0%, ${theme.colors.white.main} 90%)`,
		borderRadius: '25px',
	}),

	offersLeft: css({
		/* flex: 1, */
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}),

	offersLeftH1: css({
		color: theme.colors.black.main,
		fontSize: '8rem',
		fontWeight: '600',
		textAlign: 'center',
	}),

	offersLeftP: css({
		color: theme.colors.black.main,
		fontSize: '2.2rem',
		fontWeight: '600',
	}),

	offersLeftButton: css({
		fontSize: '1.6rem',
		border: `1px solid ${theme.colors.red.main}`,
		backgroundColor: theme.colors.red.main,
		color: theme.colors.white.main,
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		marginTop: '2rem',
		'&:hover': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
		'&:active': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
	}),

	offersRight: css({
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: '5rem',
	}),
}
