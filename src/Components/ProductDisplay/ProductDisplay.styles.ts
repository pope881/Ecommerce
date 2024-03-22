import { css } from '@emotion/css'

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
		color: '#0c0b0b',
		fontSize: '4rem',
		fontWeight: '700',
	}),

	productdisplayStars: css({
		display: 'flex',
		alignItems: 'center',
		marginTop: '1.3rem',
		gap: '0.6rem',
		color: '#0c0b0b',
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
		color: '#818181',
		textDecoration: 'line-through',
	}),

	productdisplayPriceNew: css({
		color: '#ce1446',
	}),

	productdisplaySelectsH1: css({
		marginTop: '0.5rem',
		color: '#656565',
		fontSize: '2rem',
		fontWeight: '600',
	}),

	productdisplayRightButton: css({
		marginTop: '4rem',
		padding: '1rem 4rem',
		fontSize: '1.6rem',
		fontWeight: '600',
		color: '#f8f8ff',
		backgroundColor: '#ce1446',
		marginBottom: '4rem',
		border: '1px solid #ce1446',
		outline: 'none',
		cursor: 'pointer',
		transition: '0.3s',
		borderRadius: '25px',
		'&:hover': { color: '#ce1446', background: '#f8f8ff' },
		'&:active': { color: '#ce1446', background: '#f8f8ff' },
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
		color: '#0c0b0b',
		backgroundColor: '#f8f8ff',
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
		backgroundColor: '#ce1446',
		fontSize: '3rem',
		color: '#f8f8ff',
		borderBottomRightRadius: '8px',
		borderTopRightRadius: '8px',
	}),
}
