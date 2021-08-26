/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { indexPurchase, refundPurchase } from '../../api/purchases'
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Checkout from '../stripe/Checkout'

class IndexPurchase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      purchases: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    indexPurchase(user)
      .then((response) => {
        this.setState({
          purchases: response.data.purchases
        })
      })
      .catch(console.error)
  }

  handleClick = (event) => {
    const { user, msgAlert, history } = this.props
    event.preventDefault()
    const purchaseDataId = event.target.attributes.getNamedItem('data-id').value
    refundPurchase(purchaseDataId, user)
      .then(() =>
        msgAlert({
          heading: 'Refund success',
          message: 'You should get your money back whenever we feel like it.',
          variant: 'success'
        })
      )
      .then(() => history.push('/purchases'))
      .then(() => indexPurchase(user)
        .then((response) => {
          this.setState({
            purchases: response.data.purchases
          })
        }))
      .catch((err) =>
        msgAlert({
          heading: 'Refund failed :(',
          message: 'No refund for you: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    const cardContainerLayout = {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap'
    }
    const { movies } = this.state
    const { history } = this.props
    // This is what prevents the "cannot read property map of undefined" or other similar errors because on the first render, `movies` state will be `null`
    if (movies === null) {
      return 'Loading...'
    }

    let purchaseJsx
    if (this.state.purchases.length === 0) {
      purchaseJsx = 'No purchases have been made. Go buy something!'
    } else {
      // I want movieJsx to be a bunch of li or Link or something with all my movies info in them
      // .map gives us back a new array that we can display
      purchaseJsx = this.state.purchases.map((purchase) => (
        <Card key={purchase.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{purchase.title}</Card.Title>
            <Card.Text>{purchase.description}</Card.Text>
            <Button
              onClick={() => history.push(`/purchases/${purchase._id}/review`)}>
							Review
            </Button>
            <Button data-id={purchase._id} onClick={this.handleClick}>
							Refund
            </Button>
            <Card.Text>Review: {purchase.review}</Card.Text>
            <Checkout
              name={purchase.title}
              description={purchase.price}
              amount={purchase.price}
            />
          </Card.Body>
        </Card>
      ))
    }

    return (
      <div style={cardContainerLayout}>
        {purchaseJsx}
      </div>
    )
  }
}
export default withRouter(IndexPurchase)
