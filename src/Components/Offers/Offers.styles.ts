import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	offers: css({
		display: 'flex',
		marginBottom: '10rem',
		background: 'linear-gradient(180deg, #ce1446 0%, #e1ffea22 90%)',
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
		color: `${theme.colors.mainBlack}`,
		fontSize: '8rem',
		fontWeight: '600',
		textAlign: 'center',
	}),

	offersLeftP: css({
		color: `${theme.colors.mainBlack}`,
		fontSize: '2.2rem',
		fontWeight: '600',
	}),

	offersLeftButton: css({
		fontSize: '1.6rem',
		border: '1px solid #ce1446',
		backgroundColor: `${theme.colors.mainRed}`,
		color: `${theme.colors.mainWhite}`,
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		marginTop: '2rem',
		'&:hover': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
		'&:active': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
	}),

	offersRight: css({
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingTop: '5rem',
	}),
}
