import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	testimonials: css({
		padding: '6% 10% 10%',
		width: '100%',
		backgroundColor: theme.colors.black.main,
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
		color: theme.colors.red.main,
		fontSize: '1.6rem',
		fontWeight: '600',
		textTransform: 'uppercase',
		marginBottom: '1rem',
	}),

	testimonialsHeaderTextH1: css({
		color: theme.colors.white.main,
		fontSize: '3.6rem',
		textTransform: 'capitalize',
		fontWeight: '700',
		lineHeight: '46px',
		marginBottom: '3rem',
	}),

	testimonialsHeaderTextHr: css({
		width: '40%',
		border: 'none',
		height: '2px',
		backgroundColor: theme.colors.red.main,
		marginBottom: '5rem',
	}),

	testimonialsHeaderTextP: css({
		color: theme.colors.white.main,
		fontSize: '1.6rem',
		fontWeight: '400',
		lineHeight: '1.7',
		marginBottom: '6rem',
	}),

	testimonialsItems: css({
		marginTop: '2rem',
		width: '100%',
		maxWidth: 900,
		height: 'auto',
	}),

	testimonialsItem: css({
		padding: '1rem 2rem 1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: theme.colors.white.main,
		backgroundImage: 'linear-gradient(to top, rgba(182, 173, 173, 0), rgb(79, 75, 75))',
		color: theme.colors.black.main,
		borderRadius: '50px',
		border: `3px solid ${theme.colors.black.main}`,
		height: '590px',
	}),

	testimonialsItemImg: css({
		borderRadius: '50%',
		width: '250px',
		height: '250px',
		objectFit: 'cover',
		objectPosition: "50% 50%"
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
		color: theme.colors.red.main,
		marginBottom: '1rem',
	}),
}
