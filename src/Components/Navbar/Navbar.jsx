import classes from './Navbar.module.css'
import logoShop from '../Assets/otherImg/logoShop.png'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import NavbarButton from './NavbarButton'
import { useRef } from 'react'
import dropDownIcon from '../Assets/otherImg/dropDownIcon.png'
import loginIcon from '../Assets/otherImg/loginIcon.png'
import logoutIcon from '../Assets/otherImg/logoutIcon.png'
import burgerIcon from '../Assets/otherImg/burgerIcon.png'

const Navbar = () => {
	const isAuth = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const menuRef = useRef()

	const dropdownToggle = e => {
		menuRef.current.classList.toggle(classes['navbar__menu--visible'])
		e.target.classList.toggle(classes['navbar__dropdown--open'])
	}

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	return (
		<div className={classes.navbar}>
			<div className={classes['navbar__logo']}>
				<Link to="/">
					<img src={logoShop} alt="company logo" />
				</Link>
			</div>
			<img className={classes['navbar__dropdown']} onClick={dropdownToggle} src={burgerIcon} alt="" />
			<ul ref={menuRef} className={classes['navbar__menu']}>
				<li>
					<NavLink to="/" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)} end>
						SHOP
					</NavLink>
				</li>
				<li>
					<NavLink to="/mens" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)}>
						MEN
					</NavLink>
				</li>
				<li>
					<NavLink to="/womens" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)}>
						WOMEN
					</NavLink>
				</li>
				<li>
					<NavLink to="/kids" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)}>
						KIDS
					</NavLink>
				</li>
			</ul>
			<div className={classes['navbar__loginCart']}>
				{!isAuth && (
					<Link to="/login">
						<button className={classes['navbar__btn']}>Login</button>
						<img className={classes['navbar__btnMobile']} src={loginIcon} alt="" />
					</Link>
				)}
				{isAuth && (
					<Link to="/">
						<button className={classes['navbar__btn']} onClick={logoutHandler}>
							Logout
						</button>
						<img onClick={logoutHandler} className={classes['navbar__btnMobile']} src={logoutIcon} alt="" />
					</Link>
				)}
				<Link to="/cart">
					<NavbarButton />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
