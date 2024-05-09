import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	cartitems: css({
		padding: '10rem',
	}),

	cartitemsHr: css({
		height: '2px',
		background: theme.colors.grey.light,
		border: '0',
	}),

	cartitemsLayout: css({
		color: theme.colors.grey.main,
		fontWeight: '600',
		width: '100%'
	}),

	cartitemsLayoutP: css({
		fontSize: '1.6rem',
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '1.2rem'
		}
	}),

	cartitemsFormat: css({
		fontSize: '1.6rem',
		fontWeight: '500',
	}),

	cartitemsImg: css({
		height: '90px',
	}),

	cartitemsRemoveIcon: css({
		width: '20px',
		margin: '0 1.6rem',
		cursor: 'pointer',
	}),

	cartitemsQuantity: css({
		width: '64px',
		height: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '1.6rem',
	}),

	cartitemsTotals: css({
		display: 'flex',
		margin: '10rem 0',
		gap: '10rem',
		width: '100%',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			flexDirection: 'column-reverse',
			alignItems: 'flex-end'
		},
	}),

	cartitemsTotal: css({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: '4rem',
	}),

	cartitemsTotalH1: css({
		fontSize: '2.4rem',
	}),

	cartitemsItem: css({
		display: 'flex',
		justifyContent: 'space-between',
		padding: '1.6rem 0',
	}),

	cartitemsItemP: css({
		fontSize: '1.6rem',
	}),

	cartitemsItemH3: css({
		fontSize: '2rem',
	}),

	cartitemsAction: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	cartitemsActionButton: css({
		padding: '1.5rem 3rem',
		outline: 'none',
		border: 'none',
		backgroundColor: theme.colors.red.light,
		color: theme.colors.white.main,
		fontSize: '1.6rem',
		cursor: 'pointer',
		transition: '0.3s',
		borderRadius: '25px',
		'&:hover, &:active': {
			color: theme.colors.red.main,
			background: theme.colors.white.main,
			border: `1px solid ${theme.colors.red.main}`,
		},
	}),

	cartitemsPromocode: css({
		flex: '1',
		fontWeight: '500',
		width: '100%',
		maxWidth: 500
	}),

	cartitemsPromocodeP: css({
		color: theme.colors.grey.main,
		fontSize: '1.1rem',
	}),

	cartitemsPromobox: css({
		display: 'flex',
		width: '500px',
		marginTop: '1.6rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '100%',
			maxWidth: 500
		}
	}),

	cartitemsPromoboxInput: css({
		border: 'none',
		background: 'transparent',
		width: '100%',
		fontSize: '1.6rem',
		borderRadius: '4px',
		paddingLeft: '2rem'
	}),

	cartitemsPromoboxInvalidP: css({
		color: theme.colors.red.dark,
	}),

	cartitemsPromoboxInvalidInput: css({
		borderColor: theme.colors.red.dark,
	}),

	cartitemsPromoboxButton: css({
		padding: '1.4rem 2.8rem',
		fontSize: '1.6rem',
		backgroundColor: theme.colors.black.main,
		color: theme.colors.white.main,
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': { backgroundColor: theme.colors.white.main, color: theme.colors.black.main },

	}),

	cartitemsLogInfo: css({
		marginTop: '1.6rem',
		fontSize: '1.1rem',
	}),

	cartItemsPromoboxContainer: css({
		display: 'flex',
		height: '58px',
		background: theme.colors.grey.light,
	}),

	cartItemsFormWrapper: css({
		width: '100%',
	}),

	cellHideOnMobile: css({
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			display: 'none'
		}
	})
}
