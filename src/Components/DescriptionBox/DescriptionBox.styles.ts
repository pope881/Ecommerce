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
		backgroundColor: '#f0ebe1',
		marginBottom: '0.5rem',
		padding: '1.5rem 2.5rem',
		borderRadius: '5px',
		transition: 'background-color 0.4s',
		'&:hover': { backgroundColor: '#e7d6bc' },
	}),
	accordionItemTitle: css({
		color: '#5f430e',
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
	accordionItemContentP: css({
		color: '#414141',
		fontSize: '1.6rem',
	}),
	accordionItemShow: css({
		height: 'auto',
		maxHeight: '9999px',
		transition: 'all 0.4s cubic-bezier(0, 1, 0, 1)',
	}),
}

// .wrapper {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	width: 100%;
// }

// .accordion {
// 	margin: 12rem 17rem;
// 	width: 100%;
// }

// .accordion__item {
// 	background-color: #f0ebe1;
// 	margin-bottom: 0.5rem;
// 	padding: 1.5rem 2.5rem;
// 	border-radius: 5px;
// 	transition: background-color 0.4s;
// }

// .accordion__item:hover {
// 	background-color: #e7d6bc;
// }

// .accordion__itemTitle {
// 	color: #5f430e;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	cursor: pointer;
// }

// .accordion__itemTitle h2 {
// 	font-size: 2rem;
// }

// .accordion__itemTitle span {
// 	font-size: 3.2rem;
// }

// .accordion__itemContent {
// 	color: #8b7f75;
// 	max-height: 0;
// 	overflow: hidden;
// 	transition: all 0.4s cubic-bezier(0, 1, 0, 1);
// }

// .accordion__itemContent p {
// 	color: #414141;
// 	font-size: 1.6rem;
// }

// .accordion__itemContent.accordion__itemShow {
// 	height: auto;
// 	max-height: 9999px;
// 	transition: all 0.4s cubic-bezier(0, 1, 0, 1);
// }
