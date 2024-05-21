import { useContext } from 'react'
import { CartContext } from '../Context/cart-context'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../Components/Breadcrumbs/Breadcrumb'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'
import { type AllProduct } from '../../public/allProduct'

export const Product = () => {
	const cartCtx = useContext(CartContext)
	const { allProduct } = cartCtx
	const { productId } = useParams()
	const product: AllProduct = allProduct.find(product => product.id === Number(productId)) as AllProduct

	return (
		<div>
			<Breadcrumb product={product} />
			<ProductDisplay product={product} />
			<DescriptionBox product={product} />
			<RelatedProducts />
		</div>
	)
}
