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
      .then(() => history.push('/carts'))
      .then(() => showCart(user)
        .then((response) => {
          this.setState({
            carts: response.data.carts
          })
        }))
      .catch((err) =>
        msgAlert({
          heading: 'Removal failed :(',
          message: 'Unable to remove the item from your cart: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    console.log(this.state.carts)
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
      cartJsx = 'No purchases have been made. Go buy something!'
    } else {
      // I want movieJsx to be a bunch of li or Link or something with all my movies info in them
      // .map gives us back a new array that we can display
      cartJsx = this.state.carts.map((cart) => (
        <Card key={cart.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{cart.title}</Card.Title>
            <Card.Text>{cart.description}</Card.Text>
            <Button data-id={cart._id} onClick={this.handleClick}>
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
          name={'Thanks for your purchase.'}
          description={'Please enter your payment information below'}
          amount={1}
        />
      </div>
    )
  }
}
export default withRouter(ShowCart)
