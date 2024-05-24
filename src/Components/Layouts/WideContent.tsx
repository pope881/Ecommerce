import { css } from '@emotion/css'
import { theme } from '../../theme'

const styles = {
	wideContent: css({
		margin: '0 auto',
		padding: '0 4rem',
		maxWidth: '1536px',
		width: '100%',
		[`@media (max-width: ${theme.breakpoints.lg})`]: {
			padding: '0 3rem',
		},
		[`@media (max-width: ${theme.breakpoints.sm})`]: {
			padding: '0 2rem',
		},
	}),
}

type PropsWideContent = {
	children: React.ReactNode;
	className?: string;
}
export const WideContent = ({ children, className }: PropsWideContent) => {
	return <section className={`${styles.wideContent} ${className}`} data-testid="wideContent">{children}</section>
}
