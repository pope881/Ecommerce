const Person1 = '/testimonialsImg/1.jpg'
const Person2 = '/testimonialsImg/2.jpg'
const Person3 = '/testimonialsImg/3.jpg'
const Person4 = '/testimonialsImg/4.jpg'
const Person5 = '/testimonialsImg/5.jpg'

const teamPerson1 = '/teamImg/1.png'
const teamPerson2 = '/teamImg/2.png'
const teamPerson3 = '/teamImg/3.png'
const teamPerson4 = '/teamImg/4.png'
const teamPerson5 = '/teamImg/5.png'
const teamPerson6 = '/teamImg/6.png'

const menBackground = '/backgroundSliderImg/menBackground.jpg'
const womanBackground = '/backgroundSliderImg/womanBackground.jpg'
const kidsBackground = '/backgroundSliderImg/kidsBackground.jpg'

type Testimonial = {
	name: string
	img: string
	review: string
}

type TeamMember = {
	img: string
	name: string
	job: string
}

type ColorOptions = {
	label: string
	value: string
	color: string
}

type SizeOptions = {
	label: string
	value: string
}

type ImageSlide = {
	url: string
	title: string
	body: string
}

export const testimonialData: Testimonial[] = [
	{
		name: 'John Morgan, USA',
		img: Person1,
		review: `''Shopping at shop4u has completely elevated my skillset, my creativity and my understanding of how fabric works on the body- their beautiful, high quality textiles have both challenged and inspired me, and I wouldn’t be the maker I am today without them!''`,
	},
	{
		name: `Ellie Anderson, Canada`,
		img: Person2,
		review: `''The shop4u has rapidly become my favourite place to order fabric online. I can shop safe in the knowledge that the fabrics will be top quality and true to the thorough online description. Fast shipping plus something to suit every project from everyday basics to ball gown!''`,
	},
	{
		name: `Nia Adebayo, Japan`,
		img: Person3,
		review: `''The shop4u has the best range of linens! I love their entire range of linen ginghams, and they have a wonderful curation of solid colors too.''`,
	},
	{
		name: `Rigo Louie, UK`,
		img: Person4,
		review: `''The shop4u is my first stop to find unique, high quality fabrics. I love the linen, the merino, the woolens…I can go on and on! And Liberty Fabrics I can’t find anywhere else!''`,
	},
	{
		name: `Mia Williams, Italy`,
		img: Person5,
		review: `''Every time my package arrives I am amazed at the quality of the fabrics. I know that the fabrics are well made from orders in the past, but I am still surprised every time I get my package. They all wash beautifully including the merino wool!''`,
	},
]

export const teamPeople: TeamMember[] = [
	{ img: teamPerson1, name: 'Adam Miller', job: 'CHIEF EXECUTIVE OFFICER' },
	{ img: teamPerson2, name: 'Michael Puerto', job: 'CREATIVE DIRECTOR' },
	{ img: teamPerson3, name: 'Jane Kelly', job: 'UX DESIGNER' },
	{ img: teamPerson4, name: 'Monica Smith', job: 'DESIGN DIRECTOR' },
	{ img: teamPerson5, name: 'Jake Palace', job: 'IT SPECIALIST' },
	{ img: teamPerson6, name: 'Caroline Blunt', job: 'LEAD PRODUCT DESIGNER' },
]

export const colorOptions: ColorOptions[] = [
	{
		label: 'BLACK',
		value: 'BLACK',
		color: 'black',
	},
	{
		label: 'WHEAT',
		value: 'WHEAT',
		color: 'wheat',
	},
	{
		label: 'RED',
		value: 'RED',
		color: 'red',
	},
	{
		label: 'BLUE',
		value: 'BLUE',
		color: 'blue',
	},
	{
		label: 'YELLOW',
		value: 'YELLOW',
		color: 'yellow',
	},
]

export const sizeOptions: SizeOptions[] = [
	{
		label: 'S',
		value: 'S',
	},
	{
		label: 'M',
		value: 'M',
	},
	{
		label: 'L',
		value: 'L',
	},
	{
		label: 'XL',
		value: 'XL',
	},
	{
		label: 'XXL',
		value: 'XXL',
	},
]

export const imageSlide: ImageSlide[] = [
	{ url: menBackground, title: 'MEN', body: '' },
	{
		url: womanBackground,
		title: 'WOMEN',
		body: '',
	},
	{ url: kidsBackground, title: 'KIDS', body: '' },
]
