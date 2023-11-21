import React, { useContext, useState } from 'react'
import classes from './CartItems.module.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import Checkout from '../Checkout/Checkout'

const CartItems = () => {
	const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
	const [isCheckout, setIsCheckout] = useState(false)
	// console.log(all_product)
	// console.log(cartItems)

	const orderHandler = params => {
		setIsCheckout(true)
	}
	const orderCloseHandler = params => {
		setIsCheckout(false)
	}

	return (
		<div className={classes.cartitems}>
			<div className={classes['cartitems-format-main']}>
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_product.map(e => {
				if (cartItems[e.id] > 0) {
					return (
						<div>
							<div className={`${classes['cartitems-format']} ${classes['cartitems-format-main']} `}>
								<img src={e.image} alt="" className={classes['carticon-product-icon']} />
								<p>{e.name}</p>
								<p>${e.new_price}</p>
								<button className={classes['cartitems-quantity']}>{cartItems[e.id]}</button>
								<p>${e.new_price * cartItems[e.id]}</p>
								<img
									className={classes['cartitems-remove-icon']}
									src={remove_icon}
									onClick={() => {
										removeFromCart(e.id)
									}}
									alt="cart's remove icon"
								/>
							</div>
							<hr />
						</div>
					)
				}
				return null
			})}
			<div className={classes['cartitems-down']}>
				<div className={classes['cartitems-total']}>
					<h1>cart Totals</h1>
					<div>
						<div className={classes['cartitems-total-item']}>
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className={classes['cartitems-total-item']}>
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr />
						<div className={classes['cartitems-total-item']}>
							<h3>Total</h3>
							<h3>${getTotalCartAmount()}</h3>
						</div>
					</div>
					<button onClick={orderHandler}>
						<i class="fa-solid fa-arrow-down"></i> PROCEED TO CHECKOUT <i class="fa-solid fa-arrow-down"></i>
					</button>
					{isCheckout && <Checkout onClose={orderCloseHandler} />}
				</div>
				<div className={classes['cartitems-promocode']}>
					<p>If you have a promo code, enter it here</p>
					<div className={classes['cartitems-promobox']}>
						<input type="text" placeholder="promo code" />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItems
