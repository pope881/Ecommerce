import { css } from '@emotion/css'

export const styles = {
	testimonials: css({
		padding: '6% 10% 10%',
		width: '100%',
		backgroundColor: '#0c0b0b',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	testimonialsHeaderText: css({
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
	}),

	testimonialsHeaderTextH4: css({
		color: '#ce1446',
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	testimonialsHeaderTextH1: css({
		color: '#f8f8ff',
		fontSize: '3.6rem',
		textTransform: 'capitalize',
		fontWeight: '700',
		lineHeight: '46px',
		marginBottom: '3rem',
	}),

	testimonialsHeaderTextHr: css({
		width: '30%',
		border: 'none',
		height: '2px',
		backgroundColor: '#ce1446',
		marginBottom: '5rem',
	}),

	testimonialsHeaderTextP: css({
		minWidth: '600px',
		color: '#f8f8ff',
		fontSize: '1.6rem',
		fontWeight: '400',
		lineHeight: '1.7',
		marginBottom: '6rem',
	}),

	testimonialsItems: css({
		marginTop: '2rem',
		width: '900px',
		height: 'auto',
	}),

	testimonialsItem: css({
		padding: '1rem 2rem 1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: '#f8f8ff',
		backgroundImage: 'linear-gradient(to top, rgba(182, 173, 173, 0), rgb(79, 75, 75))',
		color: '#0c0b0b',
		borderRadius: '50px',
		border: '3px solid #0c0b0b',
		height: '590px',
	}),

	testimonialsItemImg: css({
		borderRadius: '50%',
		width: '250px',
		height: '250px',
	}),

	testimonialsItemTop: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	testimonialsItemDown: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '1.8rem',
	}),

	testimonialsItemDownP: css({
		fontSize: '1.6rem',
	}),

	testimonialsName: css({
		fontSize: '2rem',
		color: '#ce1446',
		marginBottom: '1rem',
	}),
}
