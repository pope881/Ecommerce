import { useContext, useEffect, useState } from 'react'
import { styles } from './NavbarButton.styles'
import { CartContext } from '../../Context/cart-context'
import basketIcon from '../../../public/otherImg/basketIcon.png'
import cartIcon from '../../../public/otherImg/cartIcon.png'

export const NavbarButton = () => {
	const [btnIsBump, setBtnIsBump] = useState<boolean>(false)
	const [hoverButton, setHoverButton] = useState<boolean | null>(false)

	const cartCtx = useContext(CartContext)
	const { items } = cartCtx
	const numberOfCartItems = items.reduce((curNumber: number, item) => {
		return curNumber + item.amount
	}, 0)

	const btnClasses = `${styles.navbarBtnCart} ${btnIsBump ? styles.navbarBump : ''}`

	useEffect(() => {
		if (items.length === 0) {
			return
		}
		setBtnIsBump(true)

		const timer = setTimeout(() => {
			setBtnIsBump(false)
		}, 300)

		return () => {
			clearTimeout(timer)
		}
	}, [items])

	const cartColorOver = () => {
		setHoverButton(true)
	}

	const cartColorLeave = () => {
		setHoverButton(false)
	}

	return (
		<>
			<button onMouseOver={cartColorOver} onMouseLeave={cartColorLeave} className={btnClasses}>
				<img className={styles.navbarIcon} src={cartIcon} alt="basket icon for desktop"></img>
				<span className={styles.navbarBtnCartSpan}>Your Cart</span>
				<span className={styles.navbarBadge(hoverButton === true)}>{numberOfCartItems}</span>
			</button>
			<img className={styles.navbarBtnBasket} src={basketIcon} alt="basket icon for mobiles" />
		</>
	)
}
