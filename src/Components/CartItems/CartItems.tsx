import { FormEvent, useContext, useRef, useState } from 'react'
import { styles } from './CartItems.styles'
import { Checkout } from '../Checkout/Checkout'
import { CartContext } from '../../Context/cart-context'
import { useSelector } from 'react-redux'
import { CartContextType } from '../../Context/cart-context'
import { WideContent } from '../Layouts/WideContent'

type AuthState = {
	auth: {
		isAuthenticated: boolean
	}
}

export const CartItems = () => {
	const cartCtx = useContext<CartContextType>(CartContext)
	const { items, totalAmount, removeItem } = cartCtx

	const isAuth = useSelector((state: AuthState) => state.auth.isAuthenticated)

	const [isCheckout, setIsCheckout] = useState(false)
	const [showShippingFee, setShowShippingFee] = useState(false)
	const [promoCodeValidity, setPromoCodeValidity] = useState(true)

	const isFiveChars = (value: string) => value.trim().length === 5
	const promoCodeInputRef = useRef<HTMLInputElement | null>(null)

	const promoCodeHandler = (event: FormEvent) => {
		event.preventDefault()
		const enteredPromoCode = promoCodeInputRef.current?.value
		const enteredPromoCodeIsValid = enteredPromoCode ? isFiveChars(enteredPromoCode) : false

		setPromoCodeValidity(enteredPromoCodeIsValid)

		if (!enteredPromoCodeIsValid) {
			return
		}
		alert('Your promo code is valid. Your shipping will be free!')
		setShowShippingFee(true)

		if (promoCodeInputRef.current) {
			promoCodeInputRef.current.value = ''
		}
	}

	const clearPromoCode = () => {
		setShowShippingFee(false)
	}

	const orderHandler = () => {
		window.scrollTo(0, document.body.scrollHeight)
		setIsCheckout(true)
	}
	const orderCloseHandler = () => {
		setIsCheckout(false)
	}

	return (
		<WideContent>
			<table className={styles.cartitemsLayout}>
				<tr className={styles.cartItemsRow}>
					<th className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>Products</th>
					<th className={styles.cartitemsLayoutP}>Name</th>
					<th className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>Price</th>
					<th className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>Size</th>
					<th className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>Color</th>
					<th className={styles.cartitemsLayoutP}>Quantity</th>
					<th className={styles.cartitemsLayoutP}>Total</th>
					<th className={styles.cartitemsLayoutP}>Remove</th>
				</tr>
				{items.map(product => {
					return (
						<tr key={product.id} className={styles.cartItemsRow} data-testid="cartItemRow">
							<td className={styles.cellHideOnMobile}>
								<img src={product.image} alt="display of each product" className={`${styles.cartitemsImg} ${styles.cellHideOnMobile}`} />

							</td>
							<td className={styles.cartitemsLayoutP}>{product.name}</td>
							<td className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>${product.price}</td>
							<td className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>{product.size}</td>
							<td className={`${styles.cartitemsLayoutP} ${styles.cellHideOnMobile}`}>{product.color}</td>
							<td className={styles.cartitemsLayoutP}>{product.amount}</td>
							<td className={styles.cartitemsLayoutP}>${product.price * product.amount}</td>
							<td>
								<img
									className={styles.cartitemsRemoveIcon}
									src="/otherImg/cartCrossIcon.png"
									onClick={() => {
										removeItem({
											...product,
										})
									}}
									alt="cart's remove icon"
									data-testid="cartItemRemoveButton"
								/>
							</td>
						</tr>
					)
				})}
			</table>
			<div className={styles.cartitemsTotals}>
				<div className={styles.cartitemsTotal}>
					<h1 className={styles.cartitemsTotalH1}>cart Totals</h1>
					<div>
						<div className={styles.cartitemsItem}>
							<p className={styles.cartitemsItemP}>Subtotal</p>
							<p className={styles.cartitemsItemP}>${totalAmount}</p>
						</div>
						<hr className={styles.cartitemsHr} />
						{showShippingFee && (
							<div className={styles.cartitemsItem}>
								<p className={styles.cartitemsItemP}>Shipping Fee</p>
								<p className={styles.cartitemsItemP}>Free</p>
							</div>
						)}
						<hr />
						<div className={styles.cartitemsItem}>
							<h3 className={styles.cartitemsItemH3}>Total</h3>
							<h3 className={styles.cartitemsItemH3} data-testid="cartTotalAmount">${totalAmount}</h3>
						</div>
					</div>
					<div className={styles.cartitemsAction}>
						<button className={styles.cartitemsActionButton} disabled={!isAuth || !items.length} onClick={orderHandler} data-testid="proceedButton">
							Proceed to checkout
						</button>
						{!isAuth && <p className={styles.cartitemsLogInfo}>You must be logged in to proceed.</p>}
					</div>
					{isCheckout && <Checkout onSubmitPromoCode={clearPromoCode} onCancel={orderCloseHandler} />}
				</div>
				<div className={styles.cartitemsPromocode}>
					<p className={styles.cartitemsPromocodeP}>If you have a promo code, enter it here (5 characters):</p>
					<div className={styles.cartitemsPromobox}>
						<form onSubmit={promoCodeHandler} className={styles.cartItemsFormWrapper}>
							<div className={styles.cartItemsPromoboxContainer}>
								<input
									className={`${styles.cartitemsPromoboxInput} ${promoCodeValidity ? '' : styles.cartitemsPromoboxInvalidInput
										}`}
									type="text"
									placeholder="promo code"
									ref={promoCodeInputRef}
									name="promo code input"
									data-testid="promocodeInput"
								/>
								<button className={styles.cartitemsPromoboxButton} data-testid="promocodeSubmit">Submit</button>
							</div>
							{!promoCodeValidity && (
								<p
									className={`${styles.cartitemsPromocodeP} ${promoCodeValidity ? '' : styles.cartitemsPromoboxInvalidP
										}`} data-testid="promocodeError">
									Please enter a valid promo code.
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</WideContent>
	)
}
