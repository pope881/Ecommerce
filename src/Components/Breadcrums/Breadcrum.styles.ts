import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	breadcrum: css({
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
		color: `${theme.colors.mainBlack}`,
		fontSize: '1.6rem',
		fontWeight: '600',
		margin: '6rem 17rem',
		textTransform: 'capitalize',
	}),
	breadcrumA: css({
		fontSize: '1.6rem',
		textDecoration: 'none',
	}),
}
