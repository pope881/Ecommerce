import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CartProvider } from './Context/CartProvider'
import { store } from './Components/store'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { router } from './router2.tsx'

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
