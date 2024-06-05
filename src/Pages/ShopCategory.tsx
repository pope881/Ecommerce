import { Category } from '../Components/Category/Category'
import { CloudinaryImage } from '@cloudinary/url-gen/index'
import { type AllProduct } from '../../public/allProduct'

type Props = {
	groupProducts: AllProduct[]
	banner: CloudinaryImage
	category: string
}

export const ShopCategory = (props: Props) => {
	return <Category banner={props.banner} category={props.category} groupProducts={props.groupProducts} />
}
