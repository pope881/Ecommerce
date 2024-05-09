import { styles } from './Navbar.styles'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { NavbarButton } from './NavbarButton'
import { useState } from 'react'
const loginIcon = '/otherImg/loginIcon.png'
const logoutIcon = '/otherImg/logoutIcon.png'
const logoShop = '/otherImg/logoShop.png'
const crossIcon = '/otherImg/crossIcon.png'
const burgerIcon = '/otherImg/burgerIcon.png'

type AuthState = {
	auth: {
		isAuthenticated: boolean
	}
}

type NavbarLinksProps = {
	isDesktop?: boolean
	onClick?: () => void
}

const NavbarLinks = ({ isDesktop, onClick }: NavbarLinksProps) => {
	return (
		<div className={`${styles.navbarLinks} ${isDesktop && styles.navbarLinksDesktop}`}>
			<ul className={styles.navbarMenu}>
				<li className={styles.navbarMenuLi}>
					<NavLink
						to="/"
						onClick={onClick}
						className={({ isActive }) => (isActive ? `${styles.navbarMenuActive}` : `${styles.navbarMenuA}`)}
						end>
						SHOP
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						onClick={onClick}
						to="/men"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuActive}` : `${styles.navbarMenuA}`)}>
						MEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						onClick={onClick}
						to="/women"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuActive}` : `${styles.navbarMenuA}`)}>
						WOMEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						onClick={onClick}
						to="/kids"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuActive}` : `${styles.navbarMenuA}`)}>
						KIDS
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

const NavbarButtons = () => {
	const isAuth = useSelector((state: AuthState) => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	return (
		<div className={styles.navbarLoginCart}>
			<Link className={styles.navbarLoginCartA} to={isAuth ? '/' : '/login'}>
				<button className={styles.navbarBtn} {...(isAuth && { onClick: logoutHandler })}>
					<img src={isAuth ? logoutIcon : loginIcon} className={styles.navbarAuthIcon} alt="login or logout icon" />
					<span className={styles.navbarAuthBtn}>{isAuth ? 'Logout' : 'Login'}</span>
				</button>
			</Link>
			<Link className={styles.navbarLogoA} to="/cart">
				<NavbarButton />
			</Link>
		</div>
	)
}

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const burgerMenuHandler = () => {
		setIsOpen(prevIsOpen => !prevIsOpen)
		const scrollToTop = () => {
			window.scrollTo(0, 0)
		}
		scrollToTop()
	}

	return (
		<div className={styles.brugerWrapper}>
			<button className={styles.burgerBarsBtn} onClick={burgerMenuHandler}>
				<img src={burgerIcon} alt="burger menu icon" />
			</button>
			{isOpen && (
				<div className={styles.burgerMenuWrapper}>
					<NavbarLinks onClick={burgerMenuHandler} />
					<button onClick={burgerMenuHandler} className={styles.burgerMenuCloseBtn}>
						<img src={crossIcon} className={styles.burgerMenuCrossIcon} alt="burger menu cross icon" />
					</button>
				</div>
			)}
		</div>
	)
}

export const Navbar = () => (
	<div className={styles.navbar}>
		<div className={styles.navbarLogo}>
			<Link className={styles.navbarLogoA} to="/">
				<img className={styles.navbarLogoImg} src={logoShop} alt="company logo" />
			</Link>
		</div>
		<div className={styles.navbarMobileDivider} />
		<NavbarLinks isDesktop />
		<BurgerMenu />
		<NavbarButtons />
	</div>
)
