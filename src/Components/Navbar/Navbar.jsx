import classes from './Navbar.module.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { ShopContext } from '../../Context/ShopContext'
import { authActions } from '../store/auth'

import CartContext from '../../Context/cart-context'

const Navbar = () => {
	// const { getTotalCartItems } = useContext(ShopContext)

	const cartCtx = useContext(CartContext)
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	// console.log(numberOfCartItems);

	const isAuth = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(authActions.logout())
	}
	// console.log(isAuth)

	return (
		<div className={classes.navbar}>
			<div className={classes['nav-logo']}>
				<img src={logo} alt="" />
				<Link to="/">
					<p>SHOPPER</p>
				</Link>
			</div>
			<ul className={classes['nav-menu']}>
				<li>
					<NavLink to="/" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)} end>
						Shop
					</NavLink>
				</li>
				<li>
					<NavLink to="/mens" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)}>
						Men
					</NavLink>
				</li>
				<li>
					<NavLink to="/womens" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)}>
						Woman
					</NavLink>
				</li>
				<li>
					<NavLink to="/kids" className={({ isActive }) => (isActive ? `${classes['active']}` : undefined)}>
						Kids
					</NavLink>
				</li>
			</ul>
			<div className={classes['nav-login-cart']}>
				{!isAuth && (
					<Link to="/login">
						<button>Login</button>
					</Link>
				)}
				{isAuth && (
					<Link to="/">
						<button onClick={logoutHandler}>Logout</button>
					</Link>
				)}
				<Link to="/cart">
					<img src={cart_icon} />
				</Link>
				<div className={classes['nav-cart-count']}>{numberOfCartItems}</div>
			</div>
		</div>
	)
}

export default Navbar
