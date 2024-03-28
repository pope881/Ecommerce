// import React, { useContext, useEffect, useState } from 'react'
// import CartIcon from '../Assets/CartIcon'
// import classes from './NavbarButton.module.css'
// import { CartContext } from '../../Context/cart-context'
// import basketIcon from '../Assets/otherImg/basketIcon.png'

// export const NavbarButton = () => {
// 	const [btnIsBump, setBtnIsBump] = useState(false)
// 	const cartCtx = useContext(CartContext)
// 	const { items } = cartCtx
// 	const numberOfCartItems = items.reduce((curNumber, item) => {
// 		return curNumber + item.amount
// 	}, 0)

// 	const btnClasses = `${classes['navbar__btnCart']} ${btnIsBump ? classes['navbar__bump'] : ''}`

// 	useEffect(() => {
// 		if (items.length === 0) {
// 			return
// 		}
// 		setBtnIsBump(true)

// 		const timer = setTimeout(() => {
// 			setBtnIsBump(false)
// 		}, 300)

// 		return () => {
// 			clearTimeout(timer)
// 		}
// 	}, [items])

// 	return (
// 		<>
// 			<button className={btnClasses}>
// 				<span className={classes['navbar__icon']}>
// 					<CartIcon />
// 				</span>
// 				<span>Your Cart</span>
// 				<span className={classes['navbar__badge']}>{numberOfCartItems}</span>
// 			</button>
// 			<img className={classes['navbar__btnBasket']} src={basketIcon} alt="" />
// 		</>
// 	)
// }
