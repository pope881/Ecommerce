import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	newCollections: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '2rem',
		marginBottom: '10rem',
	}),

	newCollectionsH1: css({
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

	newCollectionsHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		background: theme.colors.black.main,
		textAlign: 'center',
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

	newCollectionsCollection: css({
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		marginTop: '5rem',
		gap: '2rem',

		[`@media (max-width: ${theme.breakpoints.md})`]: {
			gridTemplateColumns: '1fr 1fr',
		},

		[`@media (max-width: ${theme.breakpoints.xs})`]: {
			gridTemplateColumns: '1fr',
		},
	}),
}
