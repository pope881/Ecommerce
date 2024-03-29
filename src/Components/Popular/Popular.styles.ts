import { css } from '@emotion/css'

export const styles = {
	popular: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '1rem',
		marginBottom: '10rem',
	}),

	popularH1: css({
		color: '#171717',
		fontSize: '5rem',
		fontWeight: '600',
	}),

	popularHr: css({
		width: '200px',
		height: '6px',
		borderRadius: '10px',
		background: '#252525',
	}),

	popularItem: css({
		marginTop: '5rem',
		gap: '2rem',
		margin: '2rem 17rem',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		rowGap: '8rem',
	}),
}
