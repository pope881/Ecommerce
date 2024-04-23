import { Category } from '../Components/ShopCategory/Category'

import { AllProduct } from '../../public/allProduct'

type Props = {
	groupProducts: AllProduct[]
	banner: string
	category: string
}

export const ShopCategory = (props: Props) => {
	return <Category banner={props.banner} category={props.category} groupProducts={props.groupProducts} />
}
