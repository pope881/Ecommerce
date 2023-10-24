import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Shop />} />
					<Route path="/mens" element={<ShopCategory category="men" />} />
					<Route path="/womens" element={<ShopCategory category="women" />} />
					<Route path="/kids" element={<ShopCategory category="kids" />} />
					<Route path="/product" element={<Product />} />
					<Route path="/:product" element={<Product />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
