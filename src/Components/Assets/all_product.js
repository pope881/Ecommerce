import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'
import p5_img from './product_5.png'
import p6_img from './product_6.png'
import p7_img from './product_7.png'
import p8_img from './product_8.png'
import p9_img from './product_9.png'
import p10_img from './product_10.png'
import p11_img from './product_11.png'
import p12_img from './product_12.png'
import p13_img from './product_13.png'
import p14_img from './product_14.png'
import p15_img from './product_15.png'
import p16_img from './product_16.png'
import p17_img from './product_17.png'
import p18_img from './product_18.png'
import p19_img from './product_19.png'
import p20_img from './product_20.png'
import p21_img from './product_21.png'
import p22_img from './product_22.png'
import p23_img from './product_23.png'
import p24_img from './product_24.png'
import p25_img from './product_25.png'
import p26_img from './product_26.png'
import p27_img from './product_27.png'
import p28_img from './product_28.png'
import p29_img from './product_29.png'
import p30_img from './product_30.png'
import p31_img from './product_31.png'
import p32_img from './product_32.png'
import p33_img from './product_33.png'
import p34_img from './product_34.png'
import p35_img from './product_35.png'
import p36_img from './product_36.png'

let all_product = [
	{
		id: 1,
		name: 'Black Hoodie With Mind Less Print',
		category: 'women',
		image: p1_img,
		new_price: 50.0,
		old_price: 80.5,
		description: `Women's hoodie with a people print and the inscription Mind Less Routine. A black hoodie with a looser cut and slightly lowered shoulder line. The bottom and sleeves are finished with cuffs. It is made of soft knitwear with a high cotton content, ensuring comfort of wearing. Material weight: 240 gsm`,
		madeOf: `Material I: 80% COTTON, 20% POLYESTER`,
	},
	{
		id: 2,
		name: 'Zipped Sweatshirt With A Hood And A UNISEX Application',
		category: 'women',
		image: p2_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black sweatshirt with zipper and hood. Loose, zipped sweatshirt with a hood, long sleeves, pockets and cuffed edges. Its loose cut is complemented by a dropped shoulder line. On the front of the sweatshirt you will find a print with a lightning motif and a shiny application with rhinestones forming an inscription. You will also notice the continuation of the decorations on the sleeves. Material weight: 300 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
	},
	{
		id: 3,
		name: 'Gray Zip-Up Hoodie With A Star Motif',
		category: 'women',
		image: p3_img,
		new_price: 60.0,
		old_price: 100.5,
		description: `A slightly oversized, loose women's sweatshirt with a zipper at the front. Its traditional edges are finished with cuffs. The design is complemented by long sleeves with dropped shoulders and comfortable, slip-in pockets. On the front of the hoodie you will find a star-shaped application. Material weight: 240 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
	},
	{
		id: 4,
		name: 'Cream Fleece Hoodie',
		category: 'women',
		image: p4_img,
		new_price: 100.0,
		old_price: 150.0,
		description: `Oversized hoodie with teddy bear embroidery. Creamy fleece sweatshirt - it's warm and pleasant to the touch, and its oversized design complements the adorable teddy bear motif with wings. It has long sleeves with dropped shoulders and finished with cuffs. The hoodie has a spacious and adjustable hood. It will work well as an element of style for colder days.`,
		madeOf: `Material I: 100% POLYESTER`,
	},
	{
		id: 5,
		name: 'Long Sleeve Crop Top 2005 Gray',
		category: 'women',
		image: p5_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Gray women's top - the design was created in cooperation with the 2005 global brand. Short and tightly fitted women's blouse - model with a square neckline and long sleeves with thumbholes. Comfort while wearing is ensured by the limited number of seams. You can buy the top in two colors. If you want to create a training set, check out the other products in this collabo and choose trousers or leggings.`,
		madeOf: `Material I: 94% POLYAMIDE, 6% ELASTANE`,
	},
	{
		id: 6,
		name: 'Loose-Fitting Black V-Neck T-shirt',
		category: 'women',
		image: p6_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black women's V-neck T-shirt. Basic short-sleeved T-shirt with a looser cut. It is made of pleasant-to-touch fabric with 100% cotton content. A T-shirt is a perfect base for both everyday and elegant sets. That's why it's an absolute must-have in every girl's wardrobe! Material weight: 140 gsm`,
		madeOf: `Material I: 100% COTTON`,
	},
	{
		id: 7,
		name: 'Black Short T-Shirt With A Star Motif',
		category: 'women',
		image: p7_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Fitted, short women's T-shirt - model with short sleeves and a round neckline. The front of the crop top is decorated with an application of rhinestones forming a star motif in the Y2k style. Material weight: 160 gsm`,
		madeOf: 'Material I: 95% COTTON, 5% ELASTANE',
	},
	{
		id: 8,
		name: 'Blue Long-Sleeved Blouse With Print',
		category: 'women',
		image: p8_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Women's fitted blouse with a rubber print. Blue women's blouse made of cotton fabric with acid wash effect. Model with long sleeves and a round neckline. Due to the fact that the blouse is a standard length, it will match both low-, high- and medium-waisted trousers. Looking for inspo for a complete look? Match your T-shirt with cargo pants or parachutes!`,
		madeOf: `Material I: 95% COTTON, 5% ELASTANE`,
	},
	{
		id: 9,
		name: `Women's Jogger Sweatpants.`,
		category: 'women',
		image: p9_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Graphite trousers with a looser cut, relaxed fit and medium waist. In addition to the elastic waistband, they have an additional option of adjusting the circumference with a string. Additionally, they are equipped with two pockets on the front. The bottom of the legs has elastic. They are made of stretchy fabric that allows the skin to breathe. Thanks to them, you can enjoy freedom of movement both every day and during training. You can wear the trousers with a black sweatshirt, available in the House online store, to create a comfortable tracksuit set. Material weight: 280 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
	},
	{
		id: 10,
		name: 'Waxed High-Waisted Skinny Fit Pants',
		category: 'women',
		image: p10_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black skinny pants with a shiny finish. Waxed women's trousers with a tapered leg, classic fastening with a metal zipper and button. They have a high waist that accentuates the waist, and the fitted cut beautifully shapes the figure. Thanks to their shiny texture, the pants will make even the simplest styling with a T-shirt more attractive. They have imitation pockets on the front and classic patch pockets on the back. They are made of stretchy material with a high viscose content.`,
		madeOf: `Material I: 77% VISCOSE, 20% POLYAMIDE, 3% ELASTANE`,
	},
	{
		id: 11,
		name: 'Knitted Bell-Bottom Trousers, black',
		category: 'women',
		image: p11_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black knitted trousers with a high waist and widening legs. Women's bell-bottom trousers with decorative, edge-style stitching on the front. Flare is a cut that allows you to optically slim and lengthen your legs, and thanks to the high waist with an elastic waistband, you can emphasize your waist. They are made of stretchy, comfortable to wear fabric.`,
		madeOf: `Materiał I: 95% POLIESTER, 5% ELASTAN`,
	},
	{
		id: 12,
		name: 'Graphite Leggings With Acid Wash Effect',
		category: 'women',
		image: p12_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Gray women's leggings with acid wash effect. High-waist leggings that fit the figure are a great base for casual and sports styling. They are made of ribbed fabric that shapes the figure and ensures comfortable wearing. Wear them alone or with a long-sleeved blouse.`,
		madeOf: `Material I: 92% POLYAMIDE, 8% ELASTANE`,
	},
	{
		id: 13,
		name: 'Smooth Basic T-Shirt With A Round Neck, Mahogany',
		category: 'men',
		image: p13_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Men's cotton T-shirt with a regular cut. Mahogany T-shirt with a round neckline. It's the perfect base for outfits in any style. It is made of a pleasant to the touch, stretchy fabric. Material weight: 160 gsm`,
		madeOf: `Material I: 100% COTTON`,
	},
	{
		id: 14,
		name: 'Black Long-Sleeved T-Shirt',
		category: 'men',
		image: p14_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black longsleeve with a round neckline. Basic men's long-sleeved T-shirt with cuffs on the edges. Thanks to its minimalist form, it fits into any style of outfit. It is made of pleasant-to-touch cotton fabric. Material weight: 240 gsm`,
		madeOf: `Material I: 100% COTTON`,
	},
	{
		id: 15,
		name: 'The Nightmare Before Christmas T-Shirt, Black',
		category: 'men',
		image: p15_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black men's T-shirt with a motif from The Nightmare Before Christmas. Loose men's T-shirt with short sleeves and a round neck. On the front of the T-shirt you will find a print with a motif from Tim Butron's The Nightmare Before Christmas. Material weight: 160-165gsm`,
		madeOf: `Materiał I: 100% BAWEŁNA`,
	},
	{
		id: 16,
		name: 'Christmas T-shirt With The Office Print, White',
		category: 'men',
		image: p16_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `White T-shirt with a Christmas motif from the cult series The Office. Men's oversized short-sleeved T-shirt with a standard round neckline and a Christmas print depicting Michael Scott wearing a Santa Claus hat and the inscription: Naughty is the new nice. Material weight: 180 gsm`,
		madeOf: `Material I: 100% COTTON`,
	},
	{
		id: 17,
		name: 'Black Cardigan With A Wool Blend',
		category: 'men',
		image: p17_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Men's cardigan with a looser cut. Black cardigan made of pleasant-to-touch, ribbed knitwear with a touch of wool. Model with long sleeves and a V-neck. Its minimalist and timeless design will work well with retro looks with a turtleneck or elegant outfits with a shirt underneath.`,
		madeOf: `Material I: 53% ACRYLIC, 23% POLYESTER, 16% POLYAMIDE, 8% WOOL`,
	},
	{
		id: 18,
		name: 'Sweater With Geometric Patterns',
		category: 'men',
		image: p18_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Patterned sweater with a regular cut. Men's long-sleeved sweater with a round neckline. The sleeves and bottom have ribbed trims. The geometric pattern will make any winter style more attractive. The sweater will work well with jeans, elegant cigarette pants or cargo pants. It is made of soft-to-touch fabric.`,
		madeOf: `Material I: 56% ACRYLIC, 30% POLYESTER, 14% POLYAMIDE`,
	},
	{
		id: 19,
		name: 'Cream Hoodie With Dimension Print',
		category: 'men',
		image: p19_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Light, cream sweatshirt with a regular cut. An over-the-head sweatshirt with adjustable stoppers, a spacious hood, long sleeves, a kangaroo pocket and traditional cuffed edges. The hoodie has a print on the front and hood. Material weight: 280 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
	},
	{
		id: 20,
		name: 'Warrior Gray Hoodie With Embroidery',
		category: 'men',
		image: p20_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Men's sweatshirt with a regular cut. Model with text embroidery. Gray hoodie with a stand-up collar. It has the Warrior inscription embroidered on the front and a kangaroo pocket sewn under it. The edges of the sweatshirt are finished with a welt. Thanks to its minimalist cut, you can style this sweatshirt model with jeans, cargo pants, parachutes or elegant chinos. It is made of soft-to-touch fabric with a high cotton content. Material weight: 280 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
	},
	{
		id: 21,
		name: 'Joggers With Cargo Pockets And A Patch, Black',
		category: 'men',
		image: p21_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Black men's trousers with a classic jogger cut. Joggers with an adjustable waistband imitating a fly. They have fashionable cargo pockets on the legs. They are made of cotton fabric with the addition of elastic fibers, thanks to which you will remain comfortable while wearing them. Attention! The trouser legs are not finished with cuffs as in the case of other jogger models.`,
		madeOf: `Material I: 98% COTTON, 2% ELASTANE`,
	},
	{
		id: 22,
		name: 'Beige Joggers With Cargo Pockets And A Patch',
		category: 'men',
		image: p22_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Beige men's trousers with a classic jogger cut. Light joggers with an adjustable waistband imitating a fly. They have fashionable cargo pockets and decorative patches on the legs. They are made of cotton fabric with the addition of elastic fibers, thanks to which you will remain comfortable while wearing them. Attention! The trouser legs are not finished with cuffs as in the case of other jogger models.`,
		madeOf: `Material I: 98% COTTON, 2% ELASTANE`,
	},
	{
		id: 23,
		name: 'Loose Fit Trousers With Cargo Pockets And Khaki Print',
		category: 'men',
		image: p23_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Dark green loose fit trousers with cargo pockets and a print. Men's trousers with a loose cut. They have a standard waist height, a zip and button fastening, belt loops and slip pockets. There are cargo pockets on the sides of the legs. The trousers are covered with an irregular pattern imitating worn details. The model is made of 100% cotton twill without the addition of synthetic fibers. Pair these cargo pants with a loose sweatshirt and sneakers.`,
		madeOf: `Material I: 100% COTTON`,
	},
	{
		id: 24,
		name: 'Gray Joggers With Zippered Pockets And Print',
		category: 'men',
		image: p24_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Gray melange sweatpants with a text print on the side of one leg. Comfortable men's joggers with a standard waist height, elastic waistband and adjustable circumference. In addition to stitching, they have zipped pockets at the front and their legs are finished with cuffs. Have you fallen in love with this style? At House you can get these pants in several colors! Material weight: 300 gsm`,
		madeOf: `Material I: 60% COTTON, 40% POLYESTER`,
	},
	{
		id: 25,
		name: `Long Sleeve T-Shirt Blue With A Print Of A Dog On A Skateboard`,
		category: 'kid',
		image: p25_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `T-shirt z długim rękawem dla chłopca. Model z nadrukiem na przodzie i na rękawach. Do rozmiaru 98 napy przy dekolcie.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 26,
		name: `Long Sleeve T-shirt Red Striped With Polo Collar`,
		category: 'kid',
		image: p26_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `A polo shirt with a collar is the perfect everyday solution for every boy. Equipped with a zipper that makes it easier for each child to dress independently. The ELEGANT JUNIOR BOY blouse is decorated with a wide striped pattern. A simple cut and 100% cotton composition ensure maximum wearing comfort. The application on the front gives the T-shirt an elegant character.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 27,
		name: `Blouse With Long Sleeves White With Print And Ruffles`,
		category: 'kid',
		image: p27_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `The long-sleeved blouse from the BACK TO SCHOOL GIRL collection is perfect for more important occasions at school, but also for family celebrations. The model has ruffles on the front and a subtle print throughout, which adds originality to the blouse. Made of 100% soft and airy cotton that will keep up with every active girl.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 28,
		name: `Blouse with short sleeves
		black smooth with decorative sleeves`,
		category: 'kid',
		image: p28_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `A short-sleeved blouse for girls from the ELEGANT JUNIOR GIRL collection is a fantastic option to combine with jeans or various types of skirts. The model is made of soft velvet material. It has elegant decorative sleeves. The lack of prints makes the blouse extremely universal and matches many clothes.`,
		madeOf: `Material I: 100% polyester`,
	},
	{
		id: 29,
		name: `Sweatpants Black With Print, BATMAN license, REGULAR cut`,
		category: 'kid',
		image: p29_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Boy's sweatpants. Add unique style to your little superhero's wardrobe with our boys' sweatpants. This fashionable REGULAR model with an all-over print in the motif from the "Batman" movie attracts attention with its dark and mysterious graphics. The model is made of a soft and pleasant-to-touch material that makes it comfortable to wear all day long. Perfect for everyday challenges and fun. Let your son feel like a true defender of Gotham City in our Batman-themed sweatpants from the LICENSE BOY BATMAN collection.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 30,
		name: `Sweatpants Gray With Pockets And Stitching On The Legs, REGULAR Cut`,
		category: 'kid',
		image: p30_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Boy's sweatpants. The perfect combination of comfort and style? No problem, our sweatpants with pockets are the perfect choice for every boy! Made of high-quality materials, they provide unrivaled comfort and freedom of movement. Practical pockets allow you to store small items, and the stitching gives them a unique character. Highlight your individual style and enjoy unrivaled comfort with our tracksuits from the GRUNGE SPACE BOY JUNIOR collection.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 31,
		name: `Sweatpants Green With Pockets`,
		category: 'kid',
		image: p31_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Girls' tracksuit bottoms. Sweatpants with pockets are the perfect choice for a child who values comfort and style. They are made of the highest quality materials, which guarantees comfortable wearing and durability. Our model from the EVERYDAY GIRL B collection has an elastic waistband and cuffs on the legs - all to perfectly fit the clothes to the body of every girl. Tracksuits are the perfect option for many occasions. They can be worn every day, to school or during sports activities.
		Combed cotton - wrap yourself in softness!`,
		madeOf: `Material: 95% cotton 5% elastane`,
	},
	{
		id: 32,
		name: `Sweatpants Black Velvet Wide Leg Trousers`,
		category: 'kid',
		image: p32_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Sweatpants for girls. Add a touch of luxury and comfort to your child's wardrobe with our velvet sweatpants. This fashionable model with flared legs allows freedom of movement and adds style to any outfit. Equipped with a practical ribbon for adjusting the waist, which guarantees a perfect fit and comfortable wearing. The trousers are made of soft and pleasant to the touch velor - they provide maximum comfort throughout the day. Let your daughter enjoy luxury and comfort in our velor pants from the GRUNGE SPACE GIRL KIDS collection.`,
		madeOf: `Material: 95% cotton 5% elastane`,
	},
	{
		id: 33,
		name: `Boy'S Zip-Up Sweatshirt Oversize With Hood And Pockets`,
		category: 'kid',
		image: p33_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `The Lemon explore boys' sweatshirt is a combination of maximum comfort and good style - all this thanks to a well-thought-out design and carefully selected materials. The perfect choice for everyday use, relaxation and sports competitions`,
		madeOf: `Material: 100% polyester`,
	},
	{
		id: 34,
		name: `Boy's Unzipped Sweatshirt Sweatshirt With A Hood And Graphics`,
		category: 'kid',
		image: p34_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `The Lemon explore boys' sweatshirt is a combination of maximum comfort and good style - all this thanks to a well-thought-out design and carefully selected materials. The perfect choice for everyday use, relaxation and sports competitions.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 35,
		name: `Blouse Burgundy, Plain With Puffy Sleeves`,
		category: 'kid',
		image: p35_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `Sweatshirt for girls. Smooth model, without prints. Puffed sleeves decorated with lace. Sweatshirt for girls
		A sweatshirt for girls from the COZY GIRL JUNIOR collection is a great option for your daughter for school or even every day. It has chic puffy sleeves decorated with delicate lace. The model does not have any prints, so it will match any trousers or skirts. The material from which our sweatshirt is made is 100% cotton.`,
		madeOf: `Material I: 100% Cotton`,
	},
	{
		id: 36,
		name: `Blouse Purple Extension With Print`,
		category: 'kid',
		image: p36_img,
		new_price: 85.0,
		old_price: 120.5,
		description: `If you are looking for a warm sweatshirt for your daughter on cold days, be sure to check out our model from the GRUNGE SPACE GIRL KIDS collection, which will keep your child warm thanks to its fantastic composition - it is 100% cotton. The long-cut sweatshirt will work well with both classic jeans and leggings. Decorated with a dog print and inscriptions on the front. Bottom and sleeves finished with elastic cuffs.`,
		madeOf: `Material I: 100% Cotton`,
	},
]

export default all_product
