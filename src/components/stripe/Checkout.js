/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

import STRIPE_PUBLISHABLE from '../../constants/stripe'
import PAYMENT_SERVER_URL from '../../constants/server'
import { createPurchase } from '../../api/purchases'
import { removeFromCart } from '../../api/cart'

const CURRENCY = 'USD'

const fromUsdToCent = (amount) => amount * 100
const Checkout = ({
  cart,
  user,
  name,
  description,
  amount,
  msgAlert,
  history
}) => {
  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={fromUsdToCent(amount)}
      token={onToken(amount, description, cart, user, msgAlert, history)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  )
}
const onToken =
	(amount, description, cart, user, msgAlert, history) => (token) =>
	  axios
	    .post(PAYMENT_SERVER_URL, {
	      description,
	      source: token.id,
	      currency: CURRENCY,
	      amount: fromUsdToCent(amount)
	    })
	    .then(() => successPayment(cart, user, msgAlert, history))
	    .catch(() => errorPayment(msgAlert))

const successPayment = (cart, user, msgAlert, history) => {
  let purchaseData
  let purchaseId
  cart.forEach((purchase) => {
    purchaseData = {
      title: purchase.title,
      description: purchase.description,
      price: purchase.price.toString()
    }
    purchaseId = purchase._id
    createPurchase(purchaseData, user)
    removeFromCart(purchaseId, user)
      .then(() =>
        msgAlert({
          heading: 'Purchase successful',
          message: 'Here are your purchases!',
          variant: 'success'
        })
      )
      .then(() => history.push('/purchases'))
      .catch((err) => console.error(err))
  })
}

const errorPayment = (data, msgAlert) => {
  msgAlert({
    heading: 'Payment failed',
    message: 'Sorry, we were unable to process your payment.',
    variant: 'danger'
  })
}

export default Checkout
