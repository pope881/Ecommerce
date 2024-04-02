import { AllProduct } from './allProduct'

const product_13a = require('./allProductsImg/product_13a.png')
const product_14a = require('./allProductsImg/product_14a.png')
const product_15a = require('./allProductsImg/product_15a.png')
const product_16a = require('./allProductsImg/product_16a.png')

export const dataProductMen: AllProduct[] = [
	{
		id: 13,
		name: 'Smooth Basic T-Shirt With A Round Neck, Mahogany',
		category: 'men',
		clothes_type: 'Men Shirt',
		image: product_13a,
		image_slide: [{ url: product_13a }],
		new_price: 80.0,
		old_price: 170.5,
		description: `Men's cotton T-shirt with a regular cut. Mahogany T-shirt with a round neckline. It's the perfect base for outfits in any style. It is made of a pleasant to the touch, stretchy fabric. Material weight: 160 gsm`,
		madeOf: `Material I: 100% COTTON`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 14,
		name: 'Black Long-Sleeved T-Shirt',
		category: 'men',
		clothes_type: 'Men Shirt',
		image: product_14a,
		image_slide: [{ url: product_14a }],
		new_price: 90.0,
		old_price: 110.5,
		description: `Black longsleeve with a round neckline. Basic men's long-sleeved T-shirt with cuffs on the edges. Thanks to its minimalist form, it fits into any style of outfit. It is made of pleasant-to-touch cotton fabric. Material weight: 240 gsm`,
		madeOf: `Material I: 100% COTTON`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 15,
		name: 'The Nightmare Before Christmas T-Shirt, Black',
		category: 'men',
		clothes_type: 'Men Shirt',
		image: product_15a,
		image_slide: [{ url: product_15a }],
		new_price: 39.0,
		old_price: 89.5,
		description: `Black men's T-shirt with a motif from The Nightmare Before Christmas. Loose men's T-shirt with short sleeves and a round neck. On the front of the T-shirt you will find a print with a motif from Tim Butron's The Nightmare Before Christmas. Material weight: 160-165gsm`,
		madeOf: `Material I: 100% COTTON`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 16,
		name: 'Christmas T-shirt With The Office Print, White',
		category: 'men',
		clothes_type: 'Men Shirt',
		image: product_16a,
		image_slide: [{ url: product_16a }],
		new_price: 100.0,
		old_price: 110.5,
		description: `White T-shirt with a Christmas motif from the cult series The Office. Men's oversized short-sleeved T-shirt with a standard round neckline and a Christmas print depicting Michael Scott wearing a Santa Claus hat and the inscription: Naughty is the new nice. Material weight: 180 gsm`,
		madeOf: `Material I: 100% COTTON`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
]
