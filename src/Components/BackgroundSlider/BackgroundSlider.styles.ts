import { css } from '@emotion/css'

export const styles = {
	container: css({
		textAlign: 'center',
		height: '120vh',
		backgroundColor: '#353333',
		marginBottom: '10rem',
	}),

	containerBackground: css({
		height: '100%',
		position: 'relative',
	}),

	containerDescription: css({
		width: '600px',
		position: 'absolute',
		zIndex: '999',
		color: '#f8f8ff',
		top: '30%',
		left: '10%',
	}),

	containerDescriptionH1: css({
		fontSize: '18rem',
	}),

	containerDescriptionP: css({
		fontSize: '2.4rem',
	}),

	carouselCarousel: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	carouselCarouselSpan: css({
		width: '45px',
		height: '12px',
		backgroundColor: '#f8f8ff',
		marginLeft: '1rem',
		borderRadius: '10px',
		cursor: 'pointer',
		boxShadow: '3px 2px 2px rgba(73, 72, 72, 0.338)',
	}),

	containerBackgroundTransparent: css({
		width: '100%',
		height: '100vh',
		position: 'absolute',
		zIndex: '998',
		top: '0',
		left: '0',
		backgroundImage: 'linear-gradient(to top, rgba(154, 21, 21, 0), rgb(75, 68, 68))',
	}),
}
