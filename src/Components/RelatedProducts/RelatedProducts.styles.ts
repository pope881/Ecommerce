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
	}),

	relatedproductsHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		backgroundColor: theme.colors.black.main,
	}),

	relatedproductsItem: css({
		marginTop: '5rem',
		display: 'flex',
		gap: '3rem',
	}),
}
