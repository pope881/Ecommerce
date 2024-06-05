import { styles } from './NewCollections.styles'
import { newCollections } from '../../../public/newCollections'
import { Item } from '../Item/Item'
import { type AllProduct } from '../../../public/allProduct'
import { WideContent } from '../Layouts/WideContent'
import { cld } from '../../cloudinary'

export const NewCollections = () => {
	return (
		<WideContent>
			<div id="new-collections" className={styles.newCollections}>
				<h1 className={styles.newCollectionsH1}>NEW COLLECTIONS</h1>
				<hr className={styles.newCollectionsHr} />
				<div className={styles.newCollectionsCollection}>
					{newCollections.map((item: AllProduct, i: number) => {
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
