import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import { Footer } from './Components/Footer/Footer'
import menBanner from './Components/Assets/bannerImg/bannerMens.png'
import womanBanner from './Components/Assets/bannerImg/bannerWomen.png'
import kidBanner from './Components/Assets/bannerImg/bannerKids.png'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import Testimonials from './Pages/Testimonials'
import { ShopCategory } from './Pages/ShopCategory'
import { kidsProduct } from '../src/Components/Assets/kidsProduct'
import { menProduct } from '../src/Components/Assets/menProduct'
import { womenProduct } from '../src/Components/Assets/womenProduct'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/mens" element={<ShopCategory banner={menBanner} category="man" groupProducts={menProduct} />} />
					<Route
						path="/kids"
						element={<ShopCategory banner={kidBanner} category="kid" groupProducts={kidsProduct} />}
					/>
					<Route
						path="/womens"
						element={<ShopCategory banner={womanBanner} category="woman" groupProducts={womenProduct} />}
					/>
					<Route path="/product" element={<Product />}>
						<Route path=":productId" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<LoginSignup />} />
					<Route path="/about" element={<About />} />
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
