import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
import { Root } from './Pages/Root'
import { Error } from './Pages/Error'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Shop /> },
			{ path: '/men', element: <ShopCategory banner={menBanner} category="men" groupProducts={menProduct} /> },
			{ path: '/kids', element: <ShopCategory banner={kidBanner} category="kids" groupProducts={kidsProduct} /> },
			{ path: '/women', element: <ShopCategory banner={womanBanner} category="women" groupProducts={womenProduct} /> },
			{ path: '/cart', element: <Cart /> },
			{ path: '/login', element: <LoginSignup /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/team', element: <Team /> },
			{ path: '/testimonials', element: <Testimonials /> },
		],
	},
])

function Appp() {
	return <RouterProvider router={router} />
}

export default Appp
