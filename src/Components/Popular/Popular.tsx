import { styles } from './Popular.styles'
import { dataProductWomen } from '../../../public/dataWomen'
import { dataProductMen } from '../../../public/dataMen'
import { dataProductKids } from '../../../public/dataKids'
import { Item } from '../Item/Item'
import { AllProduct } from '../../../public/allProduct'
import { WideContent } from '../Layouts/WideContent'
import { cld } from '../../cloudinary'

export const Popular = (): JSX.Element => {
	return (
		<WideContent>
			<div className={styles.popular}>
				<h1 className={styles.popularH1}>MOST POPULAR IN WOMAN</h1>
				<hr className={styles.popularHr}></hr>
				<div className={styles.popularItem}>
					{dataProductWomen.map((item: AllProduct, i: number) => {
						const imageURL = cld.image(item.image).format('auto').quality('auto')
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={imageURL}
								new_price={item.new_price}
								old_price={item.old_price}
								clothes_type={item.clothes_type}
							/>
						)
					})}
				</div>
			</div>
			<div className={styles.popular}>
				<h1 className={styles.popularH1}>MOST POPULAR IN MAN</h1>
				<hr className={styles.popularHr}></hr>
				<div className={styles.popularItem}>
					{dataProductMen.map((item: AllProduct, i: number) => {
						const imageURL = cld.image(item.image).format('auto').quality('auto')
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={imageURL}
								new_price={item.new_price}
								old_price={item.old_price}
								clothes_type={item.clothes_type}
							/>
						)
					})}
				</div>
			</div>
			<div className={styles.popular}>
				<h1 className={styles.popularH1}>MOST POPULAR IN KIDS</h1>
				<hr className={styles.popularHr}></hr>
				<div className={styles.popularItem}>
					{dataProductKids.map((item: AllProduct, i: number) => {
						const imageURL = cld.image(item.image).format('auto').quality('auto')
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={imageURL}
								new_price={item.new_price}
								old_price={item.old_price}
								clothes_type={item.clothes_type}
							/>
						)
					})}
				</div>
			</div>
		</WideContent>
	)
}
