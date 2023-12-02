import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Assets/CartIcon'
import classes from './NavbarButton.module.css'
import CartContext from '../../Context/cart-context'

const NavbarButton = props => {
	const [btnIsBump, setBtnIsBump] = useState(false)
	const cartCtx = useContext(CartContext)
	const { items } = cartCtx
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	const btnClasses = `${classes['navbar-button']} ${btnIsBump ? classes.bump : ''}`

	useEffect(() => {
		if (items.length === 0) {
			return
		}
		setBtnIsBump(true)
	}, [items])

	return (
		<button className={btnClasses}>
			<span className={classes['navbar-icon']}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes['navbar-badge']}>{numberOfCartItems}</span>
		</button>
	)
}

export default NavbarButton
