import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	breadcrumb: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
		color: theme.colors.black.main,
		fontSize: '1.6rem',
		fontWeight: '600',
		margin: '6rem auto',
		textTransform: 'capitalize',
		[`@media (max-width: ${theme.breakpoints.md})`]: {
			margin: '2rem auto',
		},
	}),

	breadcrumbA: css({
		fontSize: '1.6rem',
		textDecoration: 'none',
	}),
}
