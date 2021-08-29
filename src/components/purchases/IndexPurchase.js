/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { indexPurchase, refundPurchase } from '../../api/purchases'
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

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
          message: 'You should get your money back within 5 business days.',
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
          message: 'Unable to refund you at the moment. Try again later. ' + err.message,
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
        <Card key={purchase.id} style={{ width: '18rem', marginTop: '40px' }}>
          <Card.Body></Card.Body>
          <Card.Body>
            <Card.Title>{purchase.title}</Card.Title>
            <Card.Text>{purchase.description}</Card.Text>
            <Button
              style={{ margin: '10px', alignItems: 'center' }}
              onClick={() => history.push(`/purchases/${purchase._id}/review`)}>
							Review
            </Button>
            <Button data-id={purchase._id} onClick={this.handleClick}>
							Refund
            </Button>
            <Card.Text style={{ fontFamily: 'Satisfy', fontSize: '25px' }}>{purchase.review}</Card.Text>
          </Card.Body>
        </Card>
      ))
    }

    return (
      <div className='movie-text' style={cardContainerLayout}>
        {purchaseJsx}
      </div>
    )
  }
}
export default withRouter(IndexPurchase)
