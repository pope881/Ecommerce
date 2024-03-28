import React from 'react'
import { styles } from './Navbar.styles'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
// import { NavbarButton } from './NavbarButton'
import { useRef } from 'react'
const loginIcon = require('../Assets/otherImg/loginIcon.png')
const logoutIcon = require('../Assets/otherImg/logoutIcon.png')
// const burgerIcon = require('../Assets/otherImg/burgerIcon.png')
const logoShop = require('../Assets/otherImg/logoShop.png')

type AuthState = {
	auth: {
		isAuthenticated: boolean
	}
}

export const Navbar = () => {
	const isAuth = useSelector((state: AuthState) => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const menuRef = useRef<HTMLUListElement | null>(null)

	// const dropdownToggle = e => {
	// 	menuRef.current?.classList.toggle(styles.navbarMenuVisible)
	// 	e.target.classList.toggle(classes['navbar__dropdown--open'])
	// }

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLogo}>
				<Link className={styles.navbarLogoA} to="/">
					<img className={styles.navbarLogoImg} src={logoShop} alt="company logo" />
				</Link>
			</div>
			{/* <img className={classes['navbar__dropdown']} onClick={dropdownToggle} src={burgerIcon} alt="" /> */}
			<ul ref={menuRef} className={styles.navbarMenu}>
				<li className={styles.navbarMenuLi}>
					<NavLink to="/" className={({ isActive }) => (isActive ? `${isActive}` : undefined)} end>
						SHOP
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink to="/mens" className={({ isActive }) => (isActive ? `${isActive}` : undefined)}>
						MEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink to="/womens" className={({ isActive }) => (isActive ? `${isActive}` : undefined)}>
						WOMEN
					</NavLink>
				</li>
				<li className={styles.navbarMenuLi}>
					<NavLink to="/kids" className={({ isActive }) => (isActive ? `${isActive}` : undefined)}>
						KIDS
					</NavLink>
				</li>
			</ul>
			<div className={styles.navbarLoginCart}>
				{!isAuth && (
					<Link className={styles.navbarLoginCartA} to="/login">
						<button className={styles.navbarBtn}>Login</button>
						<img className={styles.navbarBtnMobile} src={loginIcon} alt="" />
					</Link>
				)}
				{isAuth && (
					<Link className={styles.navbarLoginCartA} to="/">
						<button className={styles.navbarBtn} onClick={logoutHandler}>
							Logout
						</button>
						<img onClick={logoutHandler} className={styles.navbarBtnMobile} src={logoutIcon} alt="" />
					</Link>
				)}
				<Link to="/cart">{/* <NavbarButton /> */}</Link>
			</div>
		</div>
	)
}
