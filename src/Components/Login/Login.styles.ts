import { css } from '@emotion/css'

export const styles = {
	login: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '4% 10%',
		height: '100vh',
		backgroundColor: '#0c0b0b',
	}),

	loginText: css({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),

	loginTextH2: css({
		fontSize: '8rem',
		color: '#ce1446',
		marginRight: '2rem',
	}),

	loginTextP: css({
		fontSize: '9rem',
		color: '#ce1446',
	}),

	loginForm: css({
		position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		maxWidth: '56rem',
		margin: 'auto',
		padding: '5rem',
		background: ' #f8f8ff',
		borderRadius: '8px',
		boxShadow: '0 0 16px 1px rgba(0, 0, 0, 0.5)',
		transition: '0.3s',
		'&::before': {
			transition: '0.3s',
			content: '""',
			position: 'absolute',
			width: '0px',
			height: '0px',
			top: '-25px',
			left: '-25px',
			borderTop: '0px solid #ce1446',
			borderLeft: '0px solid #ce1446',
		},
		'&::after': {
			transition: '0.3s',
			content: '""',
			position: 'absolute',
			width: '0px',
			height: '0px',
			bottom: '-25px',
			right: '-25px',
			borderBottom: '0px solid #ce1446',
			borderRight: '0px solid #ce1446',
		},
		'&:hover::before': { width: '25%', height: '20%', borderTop: '6px solid #ce1446', borderLeft: '6px solid #ce1446' },
		'&:hover::after': {
			width: '25%',
			height: '20%',
			borderBottom: '6px solid #ce1446',
			borderRight: '6px solid #ce1446',
		},
	}),

	loginControl: css({
		marginBottom: '1rem',
	}),

	loginControlLoginNoMargin: css({
		marginBottom: '0',
	}),

	loginControlLabel: css({
		display: 'block',
		fontSize: '1.6rem',
		marginBottom: '0.5rem',
		color: '#0c0b0b',
		textTransform: 'uppercase',
	}),

	loginControlInput: css({
		display: 'block',
		width: '100%',
		maxWidth: '40rem',
		padding: '0.5rem',
		fontSize: '1.6rem',
		borderRadius: '4px',
		border: '1px solid',
		backgroundColor: '#869999',
		color: '#0c0b0b',
	}),

	loginControlError: css({
		color: ' #ffca99',
		height: '3.5rem',
		padding: '0.5rem 0',
	}),

	loginControlErrorP: css({
		fontSize: '1.1rem',
		margin: '0',
		color: '#aa0b20',
	}),

	loginControlErrorFormP: css({
		fontSize: '1.1rem',
		marginTop: '1rem',
		color: '#aa0b20',
		textAlign: 'center',
	}),

	loginControls: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	}),

	loginActions: css({
		display: 'flex',
		justifyContent: 'flex-start',
		gap: '1rem',
	}),

	loginButton: css({
		fontSize: '1.6rem',
		color: '#5a1a01',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: '25px',
		padding: '1rem 4rem',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#ffe6dc' },
		'&:active': { backgroundColor: '#ffe6dc' },
	}),

	loginSubmit: css({
		border: '1px solid #ce1446',
		backgroundColor: '#ce1446',
		color: '#f8f8ff',
		transition: '0.4s',
		'&:hover': { backgroundColor: '#f8f8ff', color: '#ce1446' },
		'&:active': { backgroundColor: '#f8f8ff', color: '#ce1446' },
	}),
}
