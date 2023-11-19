import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
	const [menu, setMenu] = useState('shop')
	const { getTotalCartItems } = useContext(ShopContext)
	const isAuth = useSelector(state => state.auth.isAuthenticated)
	

	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={logo} alt="" />
				<p>SHOPPER</p>
			</div>
			<ul className="nav-menu">
				<li
					onClick={() => {
						setMenu('shop')
					}}>
					<Link to="/">Shop</Link>
					{menu === 'shop' ? <hr /> : null}
				</li>
				<li
					onClick={() => {
						setMenu('mens')
					}}>
					<Link to="/mens">Men</Link>
					{menu === 'mens' ? <hr /> : null}
				</li>
				<li
					onClick={() => {
						setMenu('womens')
					}}>
					<Link to="/womens">Woman</Link>
					{menu === 'womens' ? <hr /> : null}
				</li>
				<li
					onClick={() => {
						setMenu('kids')
					}}>
					<Link to="/kids">Kids</Link>
					{menu === 'kids' ? <hr /> : null}
				</li>
			</ul>
			<div className="nav-login-cart">
				{!isAuth && (
					<Link to="/login">
						<button>Login</button>
					</Link>
				)}
				{isAuth && (
					<Link to="/">
						<button>Logout</button>
					</Link>
				)}
				<Link to="/cart">
					<img src={cart_icon} />
				</Link>
				<div className="nav-cart-count">{getTotalCartItems()}</div>
			</div>
		</div>
	)
}

export default Navbar
