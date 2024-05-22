import { Item } from '../Item/Item'
import { dataProductWomen } from '../../../public/dataWomen'
import { styles } from './OtherProducts.styles'
import { AllProduct } from '../../../public/allProduct'
import { WideContent } from '../Layouts/WideContent'

export const OtherProducts = (): JSX.Element => {
	return (
		<WideContent className={styles.OtherProducts}>
			<h1 className={styles.OtherProductsH1}>Other Products</h1>
			<hr className={styles.OtherProductsHr} />
			<div className={styles.OtherProductsItem}>
				{dataProductWomen.map((item: AllProduct, i: number) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
							clothes_type={item.clothes_type}
						/>
					)
				})}
			</div>
		</WideContent>
	)
}
