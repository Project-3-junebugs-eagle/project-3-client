import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

import STRIPE_PUBLISHABLE from '../../constants/stripe'
import PAYMENT_SERVER_URL from '../../constants/server'
import { createPurchase } from '../../api/purchases'
import { removeFromCart } from '../../api/cart'
// import { removeFromCart } from '../../api/cart'

const CURRENCY = 'USD'

const fromEuroToCent = (amount) => amount * 100

const successPayment = (cart, user) => {
  // console.log('Payment Successful', cart)
  // let purchaseData = null
  // let purchaseOwner = null
  let purchaseData
  cart.forEach((purchase) => {
    purchaseData = {
      title: purchase.title,
      description: purchase.description,
      price: purchase.price.toString()
    }
    console.log(purchaseData, user.token)
    createPurchase(purchaseData, user)
      .then(() => console.log('this works'))
      .then(() => {
        console.log(user, cart)
        let purchaseId
        cart.forEach((purchase) => {
          purchaseId = purchase._id
          removeFromCart(purchaseId, user)
        })
      })
    // .catch((err) => console.error(err))
  })
}

const errorPayment = (data) => {
  console.log('Payment Error')
}

const onToken = (amount, description, cart, user) => (token) =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(() => successPayment(cart, user))
    .catch(errorPayment)

const Checkout = ({ cart, user, name, description, amount }) => {
  return (<StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description, cart, user)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />)
}

export default Checkout
