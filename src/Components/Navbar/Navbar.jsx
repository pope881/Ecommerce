import classes from './Navbar.module.css'
import logo from '../Assets/other_img/logo-no-background.png'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import NavbarButton from './NavbarButton'

const Navbar = () => {
	const isAuth = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}

	return (
		<div className={classes.navbar}>
			<div className={classes['nav-logo']}>
				<img src={logo} alt="company logo" />
				<Link to="/">
					<p>shop4u</p>
				</Link>
			</div>
			<ul className={classes['nav-menu']}>
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
			<div className={classes['nav-login-cart']}>
				{!isAuth && (
					<Link to="/login">
						<button className={classes['nav-login-cart-button']}>Login</button>
					</Link>
				)}
				{isAuth && (
					<Link to="/">
						<button className={classes['nav-login-cart-button']} onClick={logoutHandler}>
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
