import { styles } from './Navbar.styles'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { NavbarButton } from './NavbarButton'
import { useRef } from 'react'
const loginIcon = '/otherImg/loginIcon.png'
//const logoutIcon = '/otherImg/logoutIcon.png'
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
			{/* <img className={classes['navbar__dropdown']} onClick={dropdownToggle} src={burgerIcon} alt="burger icon" /> */}
			<NavbarLinks />
		</div>
	)
}

const NavbarLinks = () => {
	const isAuth = useSelector((state: AuthState) => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	return (
		<div className={styles.navbarLinks}>
			<ul className={styles.navbarMenu}>
				<li className={styles.navbarMenuLi}>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}
						end>
						SHOP
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						to="/men"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}>
						MEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						to="/women"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}>
						WOMEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink
						to="/kids"
						className={({ isActive }) => (isActive ? `${styles.navbarMenuAActive}` : `${styles.navbarMenuA}`)}>
						KIDS
					</NavLink>
				</li>
			</ul>
			<div className={styles.navbarLoginCart}>
				<Link className={styles.navbarLoginCartA} to={isAuth ? "/" : "/login"}>
					<button className={styles.navbarBtn} {...(isAuth && { onClick: logoutHandler })}>
						{isAuth ? "Logout" : "Login"}
					</button>
					{/*<img className={styles.navbarBtnMobile} src={loginIcon} alt="login icon" />*/}
				</Link>
				<Link className={styles.navbarLogoA} to="/cart">
					<NavbarButton />
				</Link>
			</div>
		</div>
	)
}