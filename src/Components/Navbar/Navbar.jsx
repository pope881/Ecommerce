import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-logo">
				<img src={logo} alt="" />
				<p>SHOPPER</p>
			</div>
			<ul className="nav-menu">
				<li>
					Shop <hr />
				</li>
				<li>Men</li>
				<li>Woman</li>
				<li>Kids</li>
			</ul>
			<div className="nav-login-cart">
				<button>Login</button>
				<img src={cart_icon} />
				<div className="nav-cart-count"></div>
			</div>
		</div>
	)
}

export default Navbar
