import { css } from '@emotion/css'
import { theme } from '../../theme'

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
		margin: '3rem 0',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: '5rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			gap: '2rem',
			//width: '100%'
		}
	}),

	shopCategoryIndexSortPSpan: css({
		fontWeight: '600',
		fontSize: '1.4rem',
		whiteSpace: 'nowrap',
	}),

	shopCategoryActions: css({
		display: 'flex',
		justifyContent: 'center',
		gap: '1.5rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			flexDirection: 'column',
			width: '100%',
			maxWidth: '30rem',
			alignItems: 'center',
			alignSelf: 'center',
			'button': {
				width: '100%'
			}
		}
	}),

	shopCategoryBtn: css({
		fontSize: '1.6rem',
		cursor: 'pointer',
		borderRadius: '25px',
		padding: '1rem 4rem',
		border: `1px solid ${theme.colors.red.light}`,
		backgroundColor: theme.colors.red.light,
		color: theme.colors.white.main,
		transition: '0.4s',
		'&:hover': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
		'&:active': { backgroundColor: theme.colors.white.main, color: theme.colors.red.main },
	}),

	shopCategoryBtnDisabled: css({
		backgroundColor: 'gray',
		color: theme.colors.white.main,
		cursor: 'not-allowed',
		padding: '1rem 4rem',
		borderRadius: '25px',
		border: 'none',
		boxShadow: '0px 0px 10px 0px grey',
	}),

	shopCategoryProducts: css({
		margin: '4rem 0',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gap: '2rem',

		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridTemplateColumns: '1fr 1fr',
		},

		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			gridTemplateColumns: '1fr',
		},
	}),
}
