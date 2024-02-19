import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import menBanner from './Components/Assets/bannerImg/bannerMens.png'
import womanBanner from './Components/Assets/bannerImg/bannerWomen.png'
import kidBanner from './Components/Assets/bannerImg/bannerKids.png'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Team from './Pages/Team'
import Testimonials from './Pages/Testimonials'
import WomenCategory from './Pages/WomenCategory'
import MenCategory from './Pages/MenCategory'
import KidsCategory from './Pages/KidsCategory'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				{/* <Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/mens" element={<MenCategory banner={menBanner} category="men" />} />
					<Route path="/kids" element={<KidsCategory banner={kidBanner} category="kid" />} />
					<Route path="/womens" element={<WomenCategory banner={womanBanner} category="women" />} />
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
				<Footer /> */}
			</BrowserRouter>
		</div>
	)
}

export default App
