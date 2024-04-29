import { css } from '@emotion/css'
import { theme } from '../../theme'

export const styles = {
	footer: css({
		border: '1px solid rgba(0, 0, 0, 0.15)',
		width: '100%',
		height: 'auto',
		padding: '3rem 8rem',
		background: theme.colors.mainWhite,
	}),

	footerContainer: css({
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '2fr 1fr 1fr 1fr',
		gridGap: '3rem',
	}),

	footerAboutUs: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	}),
	footerQuicklinks: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	}),
	footerContactInfo: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	}),

	footerLogo: css({
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		gap: '1rem',
	}),

	footerAboutUsImg: css({
		width: '100px',
		height: '100px',
	}),

	footerSectionH2: css({
		fontSize: '2rem',
		color: theme.colors.mainBlack,
		fontWeight: '600',
		marginBottom: '0.5rem',
	}),

	footerQualityText: css({
		fontSize: '1.6rem',
		color: theme.colors.mainRed,
		fontStyle: 'italic',
		textShadow: '0px 0px 2px #ce1446',
	}),

	footerText: css({
		fontSize: '1.4rem',
		fontStyle: 'italic',
	}),

	footerQuicklinksUlLi: css({
		fontSize: '1.4rem',
		listStyle: 'none',
		textDecoration: 'none',
		marginBottom: '1rem',
		transition: '0.3s',
		maxWidth: '200px',
		'&:hover': { color: theme.colors.mainRed, transform: 'scale(1.2)' },
	}),

	footerQuicklinksUlA: css({
		textDecoration: 'none',
		color: theme.colors.mainBlack,
	}),

	footerContactInfoLi: css({
		display: 'grid',
		gridTemplateColumns: '30px 1fr',
		marginBottom: '1.6rem',
	}),

	footerContactInfoLiSpan: css({
		color: theme.colors.mainBlack,
		fontSize: '1.6rem',
	}),

	footerContactInfoLiA: css({
		color: theme.colors.mainBlack,
		textDecoration: 'none',
		fontSize: '1.6rem',
	}),

	copyrightText: css({
		width: '100%',
		fontSize: '1.6rem',
		background: theme.colors.mainWhite,
		padding: '2rem 10rem 3rem',
		textAlign: 'center',
		color: theme.colors.mainBlack,
		borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
	}),
}
