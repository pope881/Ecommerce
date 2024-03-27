import { css } from '@emotion/css'

export const styles = {
	cartitems: css({
		margin: '10rem 10rem',
	}),

	cartitemsHr: css({
		height: '3px',
		background: '#e2e2e2',
		border: '0',
	}),

	cartitemsLayout: css({
		display: 'grid',
		gridTemplateColumns: '0.5fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr',
		alignItems: 'center',
		gap: '2.5rem',
		padding: '2rem 0',
		color: '#454545',
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
		fontSize: '2.5rem',
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
		backgroundColor: '#d85477',
		color: '#f8f8ff',
		fontSize: '1.6rem',
		cursor: 'pointer',
		transition: '0.3s',
		borderRadius: '25px',
		'&:hover': { color: '#ce1446', background: '#f8f8ff', border: '1px solid #ce1446' },
		'&:active': { color: '#ce1446', background: '#f8f8ff', border: '1px solid #ce1446' },
	}),

	cartitemsPromocode: css({
		flex: '1',
		fontWeight: '500',
	}),

	cartitemsPromocodeP: css({
		color: '#555',
		fontSize: '1.1rem',
	}),

	cartitemsPromobox: css({
		display: 'flex',
		width: '500px',
		marginTop: '1.6rem',
		paddingLeft: '2rem',
		height: '58px',
		background: '#eaeaea',
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
		color: '#aa0b20',
	}),

	cartitemsPromoboxInvalidInput: css({
		borderColor: '#aa0b20',
		backgroundColor: '#ffeff1',
	}),

	cartitemsPromoboxButton: css({
		padding: '1.4rem 2.8rem',
		fontSize: '1.6rem',
		backgroundColor: '#0c0b0b',
		color: '#f8f8ff',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#0c0b0b' },
	}),

	cartitemsLogInfo: css({
		marginTop: '1.6rem',
		fontSize: '1.1rem',
	}),
}
