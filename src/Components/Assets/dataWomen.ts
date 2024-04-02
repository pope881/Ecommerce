import { type AllProduct } from './allProduct'
const product_1a = require('./allProductsImg/product_1a.png')
const product_2a = require('./allProductsImg/product_2a.png')
const product_3a = require('./allProductsImg/product_3a.png')
const product_4a = require('./allProductsImg/product_4a.png')

export const dataProductWomen: AllProduct[] = [
	{
		id: 1,
		name: 'Black Hoodie With Mind Less Print',
		category: 'women',
		clothes_type: 'Women Blouse',
		image: product_1a,
		image_slide: [{ url: product_1a }],
		new_price: 50.0,
		old_price: 80.5,
		description: `Women's hoodie with a people print and the inscription Mind Less Routine. A black hoodie with a looser cut and slightly lowered shoulder line. The bottom and sleeves are finished with cuffs. It is made of soft knitwear with a high cotton content, ensuring comfort of wearing. Material weight: 240 gsm`,
		madeOf: `Material I: 80% COTTON, 20% POLYESTER`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 2,
		name: 'Zipped Sweatshirt With A Hood And A UNISEX Application',
		category: 'women',
		clothes_type: 'Women Blouse',
		image: product_2a,
		image_slide: [{ url: product_2a }],
		new_price: 85.0,
		old_price: 120.5,
		description: `Black sweatshirt with zipper and hood. Loose, zipped sweatshirt with a hood, long sleeves, pockets and cuffed edges. Its loose cut is complemented by a dropped shoulder line. On the front of the sweatshirt you will find a print with a lightning motif and a shiny application with rhinestones forming an inscription. You will also notice the continuation of the decorations on the sleeves. Material weight: 300 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 3,
		name: 'Gray Zip-Up Hoodie With A Star Motif',
		category: 'women',
		clothes_type: 'Women Blouse',
		image: product_3a,
		image_slide: [{ url: product_3a }],
		new_price: 60.0,
		old_price: 100.5,
		description: `A slightly oversized, loose women's sweatshirt with a zipper at the front. Its traditional edges are finished with cuffs. The design is complemented by long sleeves with dropped shoulders and comfortable, slip-in pockets. On the front of the hoodie you will find a star-shaped application. Material weight: 240 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 4,
		name: 'Cream Fleece Hoodie',
		category: 'women',
		clothes_type: 'Women Blouse',
		image: product_4a,
		image_slide: [{ url: product_4a }],
		new_price: 100.0,
		old_price: 150.0,
		description: `Oversized hoodie with teddy bear embroidery. Creamy fleece sweatshirt - it's warm and pleasant to the touch, and its oversized design complements the adorable teddy bear motif with wings. It has long sleeves with dropped shoulders and finished with cuffs. The hoodie has a spacious and adjustable hood. It will work well as an element of style for colder days.`,
		madeOf: `Material I: 100% POLYESTER`,
		maintenance: [
			{ feature: 'Maximum washing temperature 40°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 150°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
]
