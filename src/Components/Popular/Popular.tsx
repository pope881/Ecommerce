import React from 'react'
import { styles } from './Popular.styles'
import { dataProductWomen } from '../Assets/dataWomen'
import { dataProductMen } from '../Assets/dataMen'
import { dataProductKids } from '../Assets/dataKids'
import { Item } from '../Item/Item'

export const Popular = () => {
	return (
		<div>
			<div className={styles.popular}>
				<h1 className={styles.popularH1}>MOST POPULAR IN WOMAN</h1>
				<hr className={styles.popularHr}></hr>
				<div className={styles.popularItem}>
					{dataProductWomen.map((item: any, i: any) => {
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						)
					})}
				</div>
			</div>
			<div className={styles.popular}>
				<h1 className={styles.popularH1}>MOST POPULAR IN MAN</h1>
				<hr className={styles.popularHr}></hr>
				<div className={styles.popularItem}>
					{dataProductMen.map((item: any, i: any) => {
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						)
					})}
				</div>
			</div>
			<div className={styles.popular}>
				<h1 className={styles.popularH1}>MOST POPULAR IN KIDS</h1>
				<hr className={styles.popularHr}></hr>
				<div className={styles.popularItem}>
					{dataProductKids.map((item: any, i: any) => {
						return (
							<Item
								key={i}
								id={item.id}
								name={item.name}
								image={item.image}
								new_price={item.new_price}
								old_price={item.old_price}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
