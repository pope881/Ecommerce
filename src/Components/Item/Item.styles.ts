import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	item: css({
		width: '100%',
		maxWidth: '350px',
		transition: '0.4s ease-in-out',
		'&:hover': { transform: 'scale(1.1)' },
	}),

	itemImg: css({
		borderRadius: '8px',
		boxShadow: '4px 4px 20px 0px rgb(188, 166, 166)',
		width: '100%',
	}),

	itemP: css({
		margin: '0.5rem 0',
		fontSize: '20px',
	}),

	itemPrices: css({
		display: 'flex',
		gap: '2rem',
	}),

	itemPriceNew: css({
		color: theme.colors.red.main,
		fontSize: '2rem',
		fontWeight: '600',
	}),

	itemPriceOld: css({
		color: theme.colors.grey.main,
		fontSize: '2rem',
		fontWeight: '500',
		textDecoration: 'line-through',
	}),
}
