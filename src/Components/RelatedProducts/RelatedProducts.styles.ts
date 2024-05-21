import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	relatedproducts: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1rem',
		marginBottom: '8rem',
	}),

	relatedproductsH1: css({
		color: theme.colors.black.main,
		fontSize: '5rem',
		fontWeight: '600',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			fontSize: '4rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			fontSize: '3rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			fontSize: '2.5rem',
		},
	}),

	relatedproductsHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		backgroundColor: theme.colors.black.main,
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			width: '160px',
			height: '5px',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			width: '120px',
			height: '4px',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			width: '100px',
			height: '4px',
		},
	}),

	relatedproductsItem: css({
		gap: '3rem',
		display: 'grid',
		margin: '2rem 0',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		rowGap: '8rem',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridTemplateColumns: '1fr 1fr',
			rowGap: '5rem',
		},
		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			gridTemplateColumns: '1fr',
			rowGap: '3rem',
		},
	}),
}
