import { styles } from './Navbar.styles'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { NavbarButton } from './NavbarButton'
import { useRef, useState } from 'react'
const loginIcon = '/otherImg/loginIcon.png'
const logoutIcon = '/otherImg/logoutIcon.png'

const logoShop = '/otherImg/logoShop.png'

type AuthState = {
	auth: {
		isAuthenticated: boolean
	}
}

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLogo}>
				<Link className={styles.navbarLogoA} to="/">
					<img className={styles.navbarLogoImg} src={logoShop} alt="company logo" />
				</Link>
			</div>
			<div className={styles.mobileDivider} />
			{/* <img className={classes['navbar__dropdown']} onClick={dropdownToggle} src={burgerIcon} alt="burger icon" /> */}
			<NavbarLinks isDesktop />
			<BurgerMenu />
			<NavbarButtons />
		</div>
	)
}

const NavbarLinks = ({
	isDesktop,
	onClick
}: {
	isDesktop?: boolean,
	onClick?: () => void
}) => {
	return (
		<div className={`${styles.navbarLinks} ${isDesktop && styles.navbarLinksDesktop}`}>
			<ul className={styles.navbarMenu}>
				<li className={styles.navbarMenuLi}>
					<NavLink
						to="/"
						onClick={onClick}
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}
						end>
						SHOP
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						onClick={onClick}
						to="/men"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}>
						MEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						onClick={onClick}
						to="/women"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}>
						WOMEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						onClick={onClick}
						to="/kids"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}>
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
			<Link className={styles.navbarLoginCartA} to={isAuth ? "/" : "/login"}>
				<button className={styles.navbarBtn} {...(isAuth && { onClick: logoutHandler })}>
					<img src={isAuth ? logoutIcon : loginIcon} className={styles.navbarAuthIcon} />
					<span className={styles.navbarAuthBtn}>
						{isAuth ? "Logout" : "Login"}
					</span>
				</button>
				{/*<img className={styles.navbarBtnMobile} src={loginIcon} alt="login icon" />*/}
			</Link>
			<Link className={styles.navbarLogoA} to="/cart">
				<NavbarButton />
			</Link>
		</div>
	)
}

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.brugerWrapper}>
			<button className={styles.burgerBars} onClick={() => setIsOpen(true)}>
				<img src="/otherImg/burgerIcon.png" />
			</button>
			{isOpen && (
				<div className={styles.menuWrapper}>
					<NavbarLinks onClick={() => setIsOpen(false)} />
					<button onClick={() => setIsOpen(false)} className={styles.menuCloseBtn}>
						{/* <img src={} /> */}
						X
					</button>
				</div>
			)}
		</div>
	)
}