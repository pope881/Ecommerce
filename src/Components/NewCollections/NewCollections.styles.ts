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
		color: '#0c0b0b',
		fontSize: '5rem',
		fontWeight: '600',
	}),

	newCollectionsHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		background: '#0c0b0b',
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
