/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { removeFromCart, showCart } from '../../api/cart'
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Checkout from '../stripe/Checkout'

class ShowCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      carts: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    showCart(user)
      .then((response) => {
        this.setState({
          carts: response.data.carts
        })
      })
      .catch(console.error)
  }

  handleClick = (event) => {
    const { user, msgAlert, history } = this.props
    event.preventDefault()
    const purchaseDataId = event.target.attributes.getNamedItem('data-id').value
    removeFromCart(purchaseDataId, user)
      .then(() =>
        msgAlert({
          heading: 'Item removed from cart',
          message: 'The item has been removed from your cart successfully',
          variant: 'success'
        })
      )
      .then(() => history.push('/cart'))
      .then(() => showCart(user)
        .then((response) => {
          this.setState({
            carts: response.data.carts
          })
        }))
      .catch((err) =>
        msgAlert({
          heading: 'Removal failed',
          message: 'Unable to remove item from your cart: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    const cartArr = this.state.carts
    let sum = 0
    for (let i = 0; i < cartArr.length; i++) {
      const itemPrice = cartArr[i].price
      sum += itemPrice
    }
    const cardContainerLayout = {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap'
    }
    const { movies } = this.state
    // This is what prevents the "cannot read property map of undefined" or other similar errors because on the first render, `movies` state will be `null`
    if (movies === null) {
      return 'Loading...'
    }

    let cartJsx
    if (this.state.carts.length === 0) {
      cartJsx = 'Cart is empty. Go add some movies!'
    } else {
      // I want movieJsx to be a bunch of li or Link or something with all my movies info in them
      // .map gives us back a new array that we can display
      cartJsx = this.state.carts.map((cart) => (
        <Card key={cart.id} style={{ width: '18rem', marginTop: '40px' }}>
          <Card.Body>
            <Card.Title>{cart.title}</Card.Title>
            <Card.Text>${cart.price}</Card.Text>
            <Button
              variant='danger'
              data-id={cart._id}
              onClick={this.handleClick}>
							Remove from cart
            </Button>
          </Card.Body>
        </Card>
      ))
    }

    return (
      <div>
        <div style={cardContainerLayout}>
          {cartJsx}
        </div>
        <Checkout
          msgAlert={this.props.msgAlert}
          history={this.props.history}
          user={this.props.user}
          cart={this.state.carts}
          name={'Enter payment information'}
          description={'Thank you for shopping with us!'}
          amount={sum}
        />
      </div>
    )
  }
}
export default withRouter(ShowCart)
