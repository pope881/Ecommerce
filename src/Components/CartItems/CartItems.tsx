import { FormEvent, useContext, useRef, useState } from 'react'
import { styles } from './CartItems.styles'
import { Checkout } from '../Checkout/Checkout'
import { CartContext } from '../../Context/cart-context'
import { useSelector } from 'react-redux'
import { CartContextType } from '../../Context/cart-context'

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

	let btnCheckout
	if (items.length !== 0 && isAuth) {
		btnCheckout = (
			<div className={styles.cartitemsAction}>
				<button className={styles.cartitemsActionButton} onClick={orderHandler}>
					Proceed to checkout
				</button>
			</div>
		)
	} else {
		btnCheckout = (
			<div className={styles.cartitemsAction}>
				<button className={styles.cartitemsActionButton} disabled onClick={orderHandler}>
					Proceed to checkout
				</button>
				<p className={styles.cartitemsLogInfo}>You must be logged in to proceed.</p>
			</div>
		)
	}
	return (
		<div className={styles.cartitems}>
			<div className={styles.cartitemsLayout}>
				<p className={styles.cartitemsLayoutP}>Products</p>
				<p className={styles.cartitemsLayoutP}>Name</p>
				<p className={styles.cartitemsLayoutP}>Price</p>
				<p className={styles.cartitemsLayoutP}>Size</p>
				<p className={styles.cartitemsLayoutP}>Color</p>
				<p className={styles.cartitemsLayoutP}>Quantity</p>
				<p className={styles.cartitemsLayoutP}>Total</p>
				<p className={styles.cartitemsLayoutP}>Remove</p>
			</div>
			<hr />
			{items.map(product => {
				return (
					<div key={product.id}>
						<div className={`${styles.cartitemsFormat} ${styles.cartitemsLayout} `}>
							<img src={product.image} alt="display of each product" className={styles.cartitemsImg} />
							<p className={styles.cartitemsLayoutP}>{product.name}</p>
							<p className={styles.cartitemsLayoutP}>${product.price}</p>
							<p className={styles.cartitemsLayoutP}>{product.size}</p>
							<p className={styles.cartitemsLayoutP}>{product.color}</p>
							<p className={styles.cartitemsQuantity}>{product.amount}</p>
							<p className={styles.cartitemsLayoutP}>${product.price * product.amount}</p>
							<img
								className={styles.cartitemsRemoveIcon}
								src="/otherImg/cartCrossIcon.png"
								onClick={() => {
									removeItem({
										...product,
									})
								}}
								alt="cart's remove icon"
							/>
						</div>
						<hr className={styles.cartitemsHr} />
					</div>
				)
			})}
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
							<h3 className={styles.cartitemsItemH3}>${totalAmount}</h3>
						</div>
					</div>
					{btnCheckout}
					{isCheckout && <Checkout onSubmitPromoCode={clearPromoCode} onCancel={orderCloseHandler} />}
				</div>
				<div className={styles.cartitemsPromocode}>
					<p className={styles.cartitemsPromocodeP}>If you have a promo code, enter it here (5 characters):</p>
					<div className={styles.cartitemsPromobox}>
						<form onSubmit={promoCodeHandler}>
							<div>
								<input
									className={`${styles.cartitemsPromoboxInput} ${
										promoCodeValidity ? '' : styles.cartitemsPromoboxInvalidInput
									}`}
									type="text"
									placeholder="promo code"
									ref={promoCodeInputRef}
									name="promo code input"
								/>
								<button className={styles.cartitemsPromoboxButton}>Submit</button>
								{!promoCodeValidity && (
									<p
										className={`${styles.cartitemsPromocodeP} ${
											promoCodeValidity ? '' : styles.cartitemsPromoboxInvalidP
										}`}>
										Please enter a valid promo code.
									</p>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
