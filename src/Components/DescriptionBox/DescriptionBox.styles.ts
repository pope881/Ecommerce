import { css } from '@emotion/css'

export const styles = {
	wrapper: css({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	}),
	accordion: css({
		margin: '12rem 17rem',
		width: '100%',
	}),
	accordionItem: css({
		backgroundColor: '#e2e2e2',
		marginBottom: '0.5rem',
		padding: '1.5rem 2.5rem',
		borderRadius: '5px',
		transition: 'background-color 0.4s',
		'&:hover': { backgroundColor: '#c3b6b6' },
	}),
	accordionItemTitle: css({
		color: '#d85477',
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
		color: '#8b7f75',
		maxHeight: 0,
		overflow: 'hidden',
		transition: 'all 0.4s cubic-bezier(0, 1, 0, 1)',
	}),
	accordionItemContentDiv: css({
		color: '#0c0b0b',
		fontSize: '1.6rem',
	}),
	accordionItemShow: css({
		height: 'auto',
		maxHeight: '9999px',
		transition: 'all 0.4s cubic-bezier(0, 1, 0, 1)',
	}),
}
