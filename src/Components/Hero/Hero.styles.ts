import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	heroTextTop: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1rem',
		marginBottom: '2rem',
	}),

	heroTextTopH1: css({
		color: `${theme.colors.mainBlack}`,
		fontSize: '5rem',
		fontWeight: '600',
	}),

	heroTextTopHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		backgroundColor: `${theme.colors.mainBlack}`,
	}),

	hero: css({
		height: '100vh',
		backgroundImage: 'linear-gradient(to top, rgba(154, 21, 21, 0), rgb(75, 68, 68))',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '10rem',
	}),

	heroText: css({
		display: 'flex',
		flex: '1',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '2rem',
		lineHeight: '1.1',
		textAlign: 'center',
		textTransform: 'uppercase',
	}),

	heroTextP: css({
		color: `${theme.colors.mainBlack}`,
		fontSize: '10rem',
		fontWeight: '700',
	}),

	heroImgWoman: css({
		display: 'flex',
		flex: '1',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}),
	heroImgWomanImg: css({
		display: 'flex',
		flex: '1',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}),
	heroImgMan: css({
		display: 'flex',
		flex: '1',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}),
	heroImgManImg: css({
		display: 'flex',
		flex: '1',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	}),

	heroBtn: css({
		fontSize: '1.6rem',
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.3s',
		border: '1px solid #ce1446',
		backgroundColor: `${theme.colors.mainRed}`,
		color: `${theme.colors.mainWhite}`,
		'&:hover': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
		'&:active': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainRed}` },
	}),
}
