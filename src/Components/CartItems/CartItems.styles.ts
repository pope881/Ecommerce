import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	cartitemsHr: css({
		height: '2px',
		background: theme.colors.grey.light,
		border: '0',
	}),

	cartitemsLayout: css({
		color: theme.colors.grey.main,
		width: '100%',
		marginTop: '4rem',
		borderCollapse: 'collapse',
	}),

	cartItemsRow: css({
		borderBottom: `1px solid ${theme.colors.grey.light}`,
	}),

	cartitemsLayoutCol: css({
		maxWidth: '10rem',
		textAlign: 'left',
		fontSize: '1.6rem',
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '1.5rem',
			textAlign: 'center',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '1.2rem',
			textAlign: 'center',
		},
	}),

	cartitemsImg: css({
		height: '90px',
	}),

	cartitemsRemoveIcon: css({
		width: '1.2rem',
		// margin: '0 1.6rem',
		cursor: 'pointer',
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			width: '1rem',
		},
	}),

	cartitemsTotals: css({
		display: 'flex',
		margin: '10rem 0',
		gap: '10rem',
		width: '100%',
		[`@media (max-width: ${theme.breakpoints.xl})`]: {
			flexDirection: 'column-reverse',
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
		maxWidth: 500,
	}),

	cartitemsPromocodeP: css({
		color: theme.colors.grey.main,
		fontSize: '1.1rem',
		marginLeft: '3rem',
	}),

	cartitemsPromobox: css({
		display: 'flex',
		width: '500px',
		marginTop: '1rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '100%',
			maxWidth: 500,
		},
	}),

	cartitemsPromoboxInput: css({
		border: 'none',
		background: 'transparent',
		width: '100%',
		fontSize: '1.6rem',
		borderRadius: '4px',
		paddingLeft: '2rem',
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
		borderRadius: '50px',
		'&:hover': { backgroundColor: theme.colors.white.main, color: theme.colors.black.main },
	}),

	cartitemsLogInfo: css({
		marginTop: '1.6rem',
		fontSize: '1.1rem',
	}),

	cartItemsPromoboxContainer: css({
		display: 'flex',
		borderRadius: '50px',
		background: theme.colors.grey.light,
	}),

	cartItemsFormWrapper: css({
		width: '100%',
	}),

	cellHideOnMobile: css({
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			display: 'none',
		},
	}),
}
