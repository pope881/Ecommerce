import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from './Pages/About.tsx'
import { Cart } from './Pages/Cart.tsx'
import { Contact } from './Pages/Contact.tsx'
import { LoginSignup } from './Pages/LoginSignup.tsx'
import { Product } from './Pages/Product.tsx'
import { Shop } from './Pages/Shop.tsx'
import { ShopCategory } from './Pages/ShopCategory.tsx'
import { Team } from './Pages/Team.tsx'
import { Testimonials } from './Pages/Testimonials.tsx'
import { kidsProduct } from '../public/kidsProduct'
import { menProduct } from '../public/menProduct'
import { womenProduct } from '../public/womenProduct'
import { Root } from './Pages/Root.tsx'
import { ErrorPage } from './Pages/ErrorPage.tsx'
import { Provider } from 'react-redux'
import { CartProvider } from './Context/CartProvider'
import { store } from './Components/store'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
const menBanner = '/bannerImg/bannerMens.png'
const womenBanner = '/bannerImg/bannerWomen.png'
const kidsBanner = '/bannerImg/bannerKids.png'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Shop /> },
			{ path: '/men', element: <ShopCategory banner={menBanner} category="men" groupProducts={menProduct} /> },
			{ path: '/kids', element: <ShopCategory banner={kidsBanner} category="kids" groupProducts={kidsProduct} /> },
			{ path: '/women', element: <ShopCategory banner={womenBanner} category="women" groupProducts={womenProduct} /> },
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

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CartProvider>
					<RouterProvider router={router} />
				</CartProvider>
			</Provider>
		</ThemeProvider>
	)
}

export default App
