import { AllProduct } from './allProduct'

import product_25a from './allProductsImg/product_25a.png'
import product_26a from './allProductsImg/product_26a.png'
import product_27a from './allProductsImg/product_27a.png'
import product_28a from './allProductsImg/product_28a.png'

export const dataProductKids: AllProduct[] = [
	{
		id: 25,
		name: `Long Sleeve T-Shirt Blue With A Print Of A Dog On A Skateboard`,
		category: 'kids',
		clothes_type: 'Kids Blouse',
		image: product_25a,
		image_slide: [{ url: product_25a }],
		new_price: 65.0,
		old_price: 100.0,
		description: `T-shirt z długim rękawem dla chłopca. Model z nadrukiem na przodzie i na rękawach. Do rozmiaru 98 napy przy dekolcie.`,
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
		id: 26,
		name: `Long Sleeve T-shirt Red Striped With Polo Collar`,
		category: 'kids',
		clothes_type: 'Kids Blouse',
		image: product_26a,
		image_slide: [{ url: product_26a }],
		new_price: 35.0,
		old_price: 55.0,
		description: `A polo shirt with a collar is the perfect everyday solution for every boy. Equipped with a zipper that makes it easier for each child to dress independently. The ELEGANT JUNIOR BOY blouse is decorated with a wide striped pattern. A simple cut and 100% cotton composition ensure maximum wearing comfort. The application on the front gives the T-shirt an elegant character.`,
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
		id: 27,
		name: `Blouse With Long Sleeves White With Print And Ruffles`,
		category: 'kids',
		clothes_type: 'Kids Blouse',
		image: product_27a,
		image_slide: [{ url: product_27a }],
		new_price: 75.0,
		old_price: 110.0,
		description: `The long-sleeved blouse from the BACK TO SCHOOL GIRL collection is perfect for more important occasions at school, but also for family celebrations. The model has ruffles on the front and a subtle print throughout, which adds originality to the blouse. Made of 100% soft and airy cotton that will keep up with every active girl.`,
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
		id: 28,
		name: `Blouse with short sleeves black smooth with decorative sleeves`,
		category: 'kids',
		image: product_28a,
		clothes_type: 'Kids Blouse',
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
