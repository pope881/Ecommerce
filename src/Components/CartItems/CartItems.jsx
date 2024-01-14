import React, { useContext, useRef, useState } from 'react'
import classes from './CartItems.module.css'
import remove_icon from '../Assets/other_img/cart_cross_icon.png'
import Checkout from '../Checkout/Checkout'
import CartContext from '../../Context/cart-context'
import { useSelector } from 'react-redux'

const CartItems = () => {
	const cartCtx = useContext(CartContext)
	const { items, totalAmount, removeItem } = cartCtx

	console.log(items)

	const isAuth = useSelector(state => state.auth.isAuthenticated)

	const [isCheckout, setIsCheckout] = useState(false)
	const [showShippingFee, setShowShippingFee] = useState(false)
	const [promoCodeValidity, setPromoCodeValidity] = useState(true)

	const isFiveChars = value => value.trim().length === 5
	const promoCodeInputRef = useRef()

	const promoCodeHandler = event => {
		event.preventDefault()
		const enteredPromoCode = promoCodeInputRef.current.value
		const enteredPromoCodeIsValid = isFiveChars(enteredPromoCode)

		setPromoCodeValidity(enteredPromoCodeIsValid)

		if (!enteredPromoCodeIsValid) {
			return
		}

		alert('Your promo code is valid. Your shipping will be free!')
		setShowShippingFee(true)

		promoCodeInputRef.current.value = ''
	}

	const clearPromoCode = params => {
		setShowShippingFee(false)
	}

	const orderHandler = params => {
		window.scrollTo(0, document.body.scrollHeight)
		setIsCheckout(true)
	}
	const orderCloseHandler = params => {
		setIsCheckout(false)
	}

	let btnCheckout
	if (items.length !== 0 && isAuth) {
		btnCheckout = (
			<button onClick={orderHandler}>
				<i className="fa-solid fa-arrow-down"></i> PROCEED TO CHECKOUT <i className="fa-solid fa-arrow-down"></i>
			</button>
		)
	} else {
		btnCheckout = (
			<div>
				<button disabled onClick={orderHandler}>
					<i className="fa-solid fa-arrow-down"></i> PROCEED TO CHECKOUT <i className="fa-solid fa-arrow-down"></i>
				</button>
				<p>You must be logged in to proceed.</p>
			</div>
		)
	}

	return (
		<div className={classes.cartitems}>
			<div className={classes['cartitems-format-main']}>
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Seize</p>
				{/* <p>Color</p> */}
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{items.map(e => {
				return (
					<div>
						<div className={`${classes['cartitems-format']} ${classes['cartitems-format-main']} `}>
							<img src={e.image} alt="image of product" className={classes['carticon-product-icon']} />
							<p>{e.name}</p>
							<p>${e.price}</p>
							<p>{e.size}</p>
							{/* <p>{e.color}</p> */}
							<button className={classes['cartitems-quantity']}>{e.amount}</button>
							<p>${e.price * e.amount}</p>
							<img
								className={classes['cartitems-remove-icon']}
								src={remove_icon}
								onClick={() => {
									removeItem({ id: e.id, size: e.size })
								}}
								alt="cart's remove icon"
							/>
						</div>
						<hr />
					</div>
				)
			})}
			<div className={classes['cartitems-down']}>
				<div className={classes['cartitems-total']}>
					<h1>cart Totals</h1>
					<div>
						<div className={classes['cartitems-total-item']}>
							<p>Subtotal</p>
							<p>${totalAmount}</p>
						</div>
						<hr />
						{showShippingFee && (
							<div className={classes['cartitems-total-item']}>
								<p>Shipping Fee</p>
								<p>Free</p>
							</div>
						)}
						<hr />
						<div className={classes['cartitems-total-item']}>
							<h3>Total</h3>
							<h3>${totalAmount}</h3>
						</div>
					</div>
					{btnCheckout}
					{/* 
					<button onClick={orderHandler}>
						<i className="fa-solid fa-arrow-down"></i> PROCEED TO CHECKOUT <i className="fa-solid fa-arrow-down"></i>
					</button> */}

					{isCheckout && <Checkout onSubmitPromoCode={clearPromoCode} onCancel={orderCloseHandler} />}
				</div>
				<div className={classes['cartitems-promocode']}>
					<p>If you have a promo code, enter it here (5 charakters):</p>
					<div className={classes['cartitems-promobox']}>
						<form onSubmit={promoCodeHandler} className={classes['form-promo']}>
							<div className={` ${promoCodeValidity ? '' : classes.invalid}`}>
								<input type="text" placeholder="promo code" ref={promoCodeInputRef} />
								<button>Submit</button>
								{!promoCodeValidity && <p>Please enter a valid promo code.</p>}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItems
