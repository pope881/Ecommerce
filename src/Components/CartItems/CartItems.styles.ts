import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	cartitems: css({
		margin: '10rem 10rem',
	}),

	cartitemsHr: css({
		height: '2px',
		background: `${theme.colors.lightGrey}`,
		border: '0',
	}),

	cartitemsLayout: css({
		display: 'grid',
		gridTemplateColumns: '0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr',
		alignItems: 'center',
		gap: '2.5rem',
		padding: '2rem 0',
		color: `${theme.colors.mainGrey}`,
		fontWeight: '600',
	}),

	cartitemsLayoutP: css({
		fontSize: '1.6rem',
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
	}),

	cartitemsTotal: css({
		minWidth: '700px',
		display: 'flex',
		flexDirection: 'column',
		marginRight: '10rem',
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
		backgroundColor: `${theme.colors.lightRed}`,
		color: `${theme.colors.mainWhite}`,
		fontSize: '1.6rem',
		cursor: 'pointer',
		transition: '0.3s',
		borderRadius: '25px',
		'&:hover': {
			color: `${theme.colors.mainRed}`,
			background: `${theme.colors.mainWhite}`,
			border: '1px solid #ce1446',
		},
		'&:active': {
			color: `${theme.colors.mainRed}`,
			background: `${theme.colors.mainWhite}`,
			border: '1px solid #ce1446',
		},
	}),

	cartitemsPromocode: css({
		flex: '1',
		fontWeight: '500',
	}),

	cartitemsPromocodeP: css({
		color: `${theme.colors.mainGrey}`,
		fontSize: '1.1rem',
	}),

	cartitemsPromobox: css({
		display: 'flex',
		width: '500px',
		marginTop: '1.6rem',
		paddingLeft: '2rem',
		height: '58px',
		background: `${theme.colors.lightGrey}`,
	}),

	cartitemsPromoboxInput: css({
		border: 'none',
		outline: 'none',
		background: 'transparent',
		width: '360px',
		height: '50px',
		fontSize: '1.6rem',
		borderRadius: '4px',
	}),

	cartitemsPromoboxInvalidP: css({
		color: `${theme.colors.darkRed}`,
	}),

	cartitemsPromoboxInvalidInput: css({
		borderColor: `${theme.colors.darkRed}`,
	}),

	cartitemsPromoboxButton: css({
		padding: '1.4rem 2.8rem',
		fontSize: '1.6rem',
		backgroundColor: `${theme.colors.mainBlack}`,
		color: `${theme.colors.mainWhite}`,
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': { backgroundColor: `${theme.colors.mainWhite}`, color: `${theme.colors.mainBlack}` },
	}),

	cartitemsLogInfo: css({
		marginTop: '1.6rem',
		fontSize: '1.1rem',
	}),
}
