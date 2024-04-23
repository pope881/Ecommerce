import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './Pages/About'
import { Cart } from './Pages/Cart'
import { Contact } from './Pages/Contact'
import { LoginSignup } from './Pages/LoginSignup'
import { Product } from './Pages/Product'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Team } from './Pages/Team'
import { Testimonials } from './Pages/Testimonials'
import { kidsProduct } from '../public/kidsProduct'
import { menProduct } from '../public/menProduct'
import { womenProduct } from '../public/womenProduct'
import { Root } from './Pages/Root'
import { ErrorPage } from './Pages/ErrorPage'
import menBanner from './Components/Assets/bannerImg/bannerMens.png'
import womanBanner from './Components/Assets/bannerImg/bannerWomen.png'
import kidBanner from './Components/Assets/bannerImg/bannerKids.png'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Shop /> },
			{ path: '/men', element: <ShopCategory banner={menBanner} category="men" groupProducts={menProduct} /> },
			{ path: '/kids', element: <ShopCategory banner={kidBanner} category="kids" groupProducts={kidsProduct} /> },
			{ path: '/women', element: <ShopCategory banner={womanBanner} category="women" groupProducts={womenProduct} /> },
			{ path: '/product/:productId', element: <Product /> },
			{ path: '/cart', element: <Cart /> },
			{ path: '/login', element: <LoginSignup /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/team', element: <Team /> },
			{ path: '/testimonials', element: <Testimonials /> },
		],
	},
])

export function Router() {
	return <RouterProvider router={router} />
}


