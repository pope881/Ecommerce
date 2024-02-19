import classes from './Navbar.module.css'
import logoShop from '../Assets/otherImg/logoShop.png'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import { useRef } from 'react'

import NavbarButton from './NavbarButton'

const Navbar = () => {
	const isAuth = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const menuRef = useRef()

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	const dropDownToggle = event => {
		menuRef.current.classList.toggle('navbar__menu__visible')
		event.target.classList.toggle('navbar__menu__open')
	}

	return (
		<div className={classes.navbar}>
			<div className={classes['navbar__logo']}>
				<Link to="/">
					<img src={logoShop} alt="company logo" />
				</Link>
			</div>
			<div className={classes['navbar__dropdown']} onClick={dropDownToggle}>
				<i className="fa-solid fa-circle-chevron-down"></i>
			</div>
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
					</Link>
				)}
				{isAuth && (
					<Link to="/">
						<button className={classes['navbar__btn']} onClick={logoutHandler}>
							Logout
						</button>
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
