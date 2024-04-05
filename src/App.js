import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './Pages/About'
import { Cart } from './Pages/Cart'
import { Contact } from './Pages/Contact'
import { LoginSignup } from './Pages/LoginSignup'
import { Product } from './Pages/Product'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import { Team } from './Pages/Team'
import { Testimonials } from './Pages/Testimonials'
import menBanner from './Components/Assets/bannerImg/bannerMens.png'
import womanBanner from './Components/Assets/bannerImg/bannerWomen.png'
import kidBanner from './Components/Assets/bannerImg/bannerKids.png'
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
					<Route path="/men" element={<ShopCategory banner={menBanner} category="men" groupProducts={menProduct} />} />
					<Route
						path="/kids"
						element={<ShopCategory banner={kidBanner} category="kids" groupProducts={kidsProduct} />}
					/>
					<Route
						path="/women"
						element={<ShopCategory banner={womanBanner} category="women" groupProducts={womenProduct} />}
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
