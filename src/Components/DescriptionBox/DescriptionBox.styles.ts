import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	wrapper: css({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		margin: '6rem auto'
	}),
	accordion: css({
		width: '100%',
	}),
	accordionItem: css({
		backgroundColor: theme.colors.grey.light,
		marginBottom: '0.5rem',
		padding: '1.5rem 2.5rem',
		borderRadius: '5px',
		transition: 'background-color 0.3s',
		'&:hover': { backgroundColor: theme.colors.grey.dark },
	}),
	accordionItemTitle: css({
		color: theme.colors.red.light,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		cursor: 'pointer',
	}),
	accordionItemTitleH2: css({
		fontSize: '2rem',
	}),
	accordionItemTitleSpan: css({
		fontSize: '3.2rem',
	}),
	accordionItemContent: css({
		maxHeight: 0,
		overflow: 'hidden',
		transition: 'all 0.4s cubic-bezier(0, 1, 0, 1)',
	}),
	accordionItemContentDiv: css({
		color: theme.colors.black.main,
		fontSize: '1.6rem',
	}),
	accordionItemShow: css({
		height: 'auto',
		maxHeight: '9999px',
		transition: 'all 0.4s cubic-bezier(0, 1, 0, 1)',
	}),
}
