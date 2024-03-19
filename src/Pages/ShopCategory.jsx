import React from 'react'
import { Category } from '../Components/ShopCategory/Category'

export const ShopCategory = props => {
	return <Category banner={props.banner} category={props.category} groupProducts={props.groupProducts} />
}
