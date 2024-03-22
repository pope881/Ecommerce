import { css } from '@emotion/css'

export const styles = {
	shopCategory: css({
		marginBottom: '10rem',
	}),

	shopCategoryBanner: css({
		display: 'block',
		margin: '3rem auto',
		width: '80%',
		borderRadius: '16px',
	}),

	shopCategoryIndexSort: css({
		display: 'flex',
		margin: '3rem 4rem',
		justifyContent: 'flex-start',
		alignItems: 'center',
	}),

	shopCategoryIndexSortPSpan: css({
		fontWeight: '600',
	}),

	shopCategoryIndexSortSpan: css({
		margin: '5rem',
		fontSize: '1.4rem',
	}),

	shopCategoryActions: css({
		display: 'flex',
		justifyContent: 'center',
		gap: '1.5rem',
	}),

	shopCategoryBtn: css({
		fontSize: '1.6rem',
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		border: '1px solid #d85477',
		backgroundColor: '#d85477',
		color: '#f8f8ff',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#ce1446' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#ce1446' },
	}),

	shopCategoryBtnDisabled: css({
		backgroundColor: 'gray',
		color: '#f8f8ff',
		cursor: 'not-allowed',
		padding: '1rem 4rem',
		borderRadius: '25px',
		border: 'none',
		boxShadow: '0px 0px 10px 0px grey',
	}),

	shopCategoryProducts: css({
		margin: '4rem',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		rowGap: '5rem',
	}),
}
