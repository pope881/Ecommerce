import { type AllProduct } from './allProduct'
const product_12a = 'Ecommerce/product_12a.png'
const product_35a = 'Ecommerce/product_35a.png'
const product_14a = 'Ecommerce/product_14a.png'
const product_8a = 'Ecommerce/product_8a.png'
const product_15a = 'Ecommerce/product_15a.png'
const product_2a = 'Ecommerce/product_2a.png'
const product_17a = 'Ecommerce/product_17a.png'
const product_28a = 'Ecommerce/product_28a.png'

export const newCollections: AllProduct[] = [
	{
		id: 12,
		name: 'Graphite Leggings With Acid Wash Effect',
		category: 'women',
		clothes_type: 'Women Trousers',
		image: product_12a,
		image_slide: [{ url: product_12a }],
		new_price: 110.0,
		old_price: 160.5,
		description: `Gray women's leggings with acid wash effect. High-waist leggings that fit the figure are a great base for casual and sports styling. They are made of ribbed fabric that shapes the figure and ensures comfortable wearing. Wear them alone or with a long-sleeved blouse.`,
		madeOf: `Material I: 92% POLYAMIDE, 8% ELASTANE`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 35,
		name: `Blouse Burgundy, Plain With Puffy Sleeves`,
		category: 'kids',
		clothes_type: 'Kid Blouse',
		image: product_35a,
		image_slide: [{ url: product_35a }],
		new_price: 65.0,
		old_price: 85.0,
		description: `Sweatshirt for girls. Smooth model, without prints. Puffed sleeves decorated with lace. Sweatshirt for girls
		A sweatshirt for girls from the COZY GIRL JUNIOR collection is a great option for your daughter for school or even every day. It has chic puffy sleeves decorated with delicate lace. The model does not have any prints, so it will match any trousers or skirts. The material from which our sweatshirt is made is 100% cotton.`,
		madeOf: `Material I: 100% Cotton`,
		maintenance: [
			{ feature: 'Maximum washing temperature 40°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 150°C' },
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
		id: 8,
		name: 'Blue Long-Sleeved Blouse With Print',
		category: 'women',
		clothes_type: 'Women Shirt',
		image: product_8a,
		image_slide: [{ url: product_8a }],
		new_price: 85.0,
		old_price: 120.5,
		description: `Women's fitted blouse with a rubber print. Blue women's blouse made of cotton fabric with acid wash effect. Model with long sleeves and a round neckline. Due to the fact that the blouse is a standard length, it will match both low-, high- and medium-waisted trousers. Looking for inspo for a complete look? Match your T-shirt with cargo pants or parachutes!`,
		madeOf: `Material I: 95% COTTON, 5% ELASTANE`,
		maintenance: [
			{ feature: 'Maximum washing temperature 40°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 150°C' },
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
		id: 17,
		name: 'Black Cardigan With A Wool Blend',
		category: 'men',
		clothes_type: 'Men Blouse',
		image: product_17a,
		image_slide: [{ url: product_17a }],
		new_price: 99.0,
		old_price: 130.5,
		description: `Men's cardigan with a looser cut. Black cardigan made of pleasant-to-touch, ribbed knitwear with a touch of wool. Model with long sleeves and a V-neck. Its minimalist and timeless design will work well with retro looks with a turtleneck or elegant outfits with a shirt underneath.`,
		madeOf: `Material I: 53% ACRYLIC, 23% POLYESTER, 16% POLYAMIDE, 8% WOOL`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
	{
		id: 28,
		name: `Blouse with short sleeves black smooth with decorative sleeves`,
		category: 'kids',
		image: product_28a,
		clothes_type: 'Kid Blouse',
		image_slide: [{ url: product_28a }],
		new_price: 45.0,
		old_price: 90.5,
		description: `A short-sleeved blouse for girls from the ELEGANT JUNIOR GIRL collection is a fantastic option to combine with jeans or various types of skirts. The model is made of soft velvet material. It has elegant decorative sleeves. The lack of prints makes the blouse extremely universal and matches many clothes.`,
		madeOf: `Material I: 100% polyester`,
		maintenance: [
			{ feature: 'Maximum washing temperature 30°C. A gentle process' },
			{ feature: 'Do not use bleach' },
			{ feature: 'Iron at the maximum temperature of the lower plate: 110°C' },
			{ feature: 'Do not dry clean' },
			{ feature: 'Do not tumble dry' },
		],
	},
]
