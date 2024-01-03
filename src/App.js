import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import woman_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import About from './Pages/About'
import Offices from './Pages/Offices'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import Testimonials from './Pages/Testimonials'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
					<Route path="/womens" element={<ShopCategory banner={woman_banner} category="women" />} />
					<Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
					<Route path="/product" element={<Product />}>
						<Route path=":productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSignup />} />
					<Route path="/about" element={<About />} />
					<Route path="/offices" element={<Offices />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/team" element={<Team />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
