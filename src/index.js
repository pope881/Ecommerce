import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Components/store/index'

import './index.css'
import App from './App'
// import ShopContextProvider from './Context/ShopContext'
import CartProvider from './Context/CartProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<CartProvider>
			<App />
		</CartProvider>
	</Provider>
)
