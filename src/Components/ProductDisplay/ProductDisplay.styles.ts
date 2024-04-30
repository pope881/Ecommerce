import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	productdisplay: css({
		display: 'flex',
		margin: '0 10rem',
	}),

	productdisplaySliderContainer: css({
		margin: '0 2rem',
	}),

	productdisplayLeft: css({
		display: 'flex',
		gap: '1.6rem',
	}),

	productdisplayImgList: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.6rem',
	}),

	productdisplayImgListImg: css({
		height: '160px',
	}),

	productdisplayRight: css({
		display: 'flex',
		flexDirection: 'column',
		margin: '0 3rem',
	}),

	productdisplayRightH1: css({
		color: theme.colors.black.main,
		fontSize: '4rem',
		fontWeight: '700',
	}),

	productdisplayStars: css({
		display: 'flex',
		alignItems: 'center',
		marginTop: '1.3rem',
		gap: '0.6rem',
		color: theme.colors.black.main,
		fontSize: '1.6rem',
	}),

	productdisplayPrices: css({
		display: 'flex',
		margin: '3rem 0',
		gap: '3rem',
		fontSize: '4rem',
		fontWeight: '700',
	}),

	productdisplayPriceOld: css({
		color: theme.colors.grey.main,
		textDecoration: 'line-through',
	}),

	productdisplayPriceNew: css({
		color: theme.colors.red.main,
	}),

	productdisplaySelectsH1: css({
		marginTop: '0.5rem',
		color: theme.colors.grey.main,
		fontSize: '2rem',
		fontWeight: '600',
	}),

	productdisplayRightButton: css({
		marginTop: '4rem',
		padding: '1rem 4rem',
		fontSize: '1.6rem',
		fontWeight: '600',
		color: theme.colors.white.main,
		backgroundColor: theme.colors.red.main,
		marginBottom: '4rem',
		border: `1px solid ${theme.colors.red.main}`,
		outline: 'none',
		cursor: 'pointer',
		transition: '0.3s',
		borderRadius: '25px',
		'&:hover': { color: theme.colors.red.main, background: theme.colors.white.main },
		'&:active': { color: theme.colors.red.main, background: theme.colors.white.main },
	}),

	productdisplayRightCategory: css({
		marginTop: '1rem',
	}),

	productdisplayRightCategorySpan: css({
		fontWeight: '600',
		fontSize: '1.6rem',
	}),

	productdisplaySelectContainer: css({
		display: 'flex',
		justifyContent: 'flex-start',
		position: 'relative',
		minWidth: '250px',
		width: '100px',
		height: '45px',
		marginBottom: '2rem',
	}),

	productdisplaySelectBox: css({
		appearance: 'none',
		padding: '0 3rem 0 1.5rem',
		width: '100%',
		color: theme.colors.black.main,
		backgroundColor: theme.colors.white.main,
		fontSize: '1.5rem',
		fontWeight: 'bold',
		borderRadius: '8px',
	}),

	productdisplaySelectBoxOption: css({
		fontSize: '1.5rem',
	}),

	productdisplayIconContainer: css({
		width: '50px',
		height: '100%',
		position: 'absolute',
		right: '0',
		top: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.red.main,
		fontSize: '3rem',
		color: theme.colors.white.main,
		borderBottomRightRadius: '8px',
		borderTopRightRadius: '8px',
	}),
}
