import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	productdisplay: css({
		display: 'flex',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			display: 'grid',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			display: 'flex',
			flexDirection: 'column',
		},
	}),

	productdisplaySliderContainer: css({
		margin: '0 2rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			margin: 0,
			gridColumn: '2',
			justifySelf: 'auto',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			alignSelf: 'center',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),

	productdisplayLeft: css({
		display: 'flex',
		gap: '1.6rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridColumn: '1',
			alignSelf: 'center',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			order: 2,
		},
	}),

	productdisplayImgList: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1.6rem',
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			width: '100%',
			gap: '1rem',
		},
	}),

	productdisplayImgListImg: css({
		height: '160px',
		cursor: 'pointer',
		borderRadius: '8px',
	}),

	productdisplayRight: css({
		display: 'flex',
		flexDirection: 'column',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridColumn: '1 / 3',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			order: 3,
		},
	}),

	productdisplayRightH1: css({
		padding: '1rem 0',
		color: theme.colors.black.main,
		fontSize: '4rem',
		fontWeight: '700',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '3.5rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '3rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '2.5rem',
		},
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
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: '3rem 0',
		gap: '2rem',
		fontWeight: '700',
	}),

	productdisplayPriceOld: css({
		color: theme.colors.grey.main,
		textDecoration: 'line-through',
		fontSize: '2.2rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '2rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '1.8rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '1.6rem',
		},
	}),

	productdisplayPriceNew: css({
		color: theme.colors.red.main,
		fontSize: '3rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '2.8rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '2.6rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '2rem',
		},
	}),

	productdisplaySelectsH1: css({
		marginTop: '0.5rem',
		color: theme.colors.grey.main,
		fontSize: '2rem',
		fontWeight: '600',
	}),

	productdisplayRightButton: css({
		marginTop: '4rem',
		marginBottom: '4rem',
		padding: '1rem 4rem',
		fontSize: '1.6rem',
		fontWeight: '600',
		color: theme.colors.white.main,
		backgroundColor: theme.colors.red.main,
		border: `1px solid ${theme.colors.red.main}`,
		cursor: 'pointer',
		transition: '0.3s',
		borderRadius: '25px',
		'&:hover': { color: theme.colors.red.main, background: theme.colors.white.main },
		'&:active': { color: theme.colors.red.main, background: theme.colors.white.main },
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			width: '80%',
			margin: '4rem auto 4rem ',
			padding: '1.5rem 4rem',
		},
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
		height: '40px',
		marginBottom: '2rem',
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			width: '80%',
			height: '40px',
		},
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
