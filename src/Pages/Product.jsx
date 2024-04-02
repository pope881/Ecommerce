import React, { useContext } from 'react'
import { CartContext } from '../Context/cart-context'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
	const cartCtx = useContext(CartContext)
	const { allProduct } = cartCtx
	const { productId } = useParams()
	const product = allProduct.find(product => product.id === Number(productId))

	return (
		<div>
			<Breadcrum product={product} />
			<ProductDisplay product={product} />
			<DescriptionBox product={product} />
			<RelatedProducts />
		</div>
	)
}
