import React, { Component } from 'react'
import { indexPurchase } from '../../api/purchases'
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
        console.log(response.data)
      })
      .catch(console.error)
  }

  render () {
    return (
      <div>
        {this.state.purchases.map((purchase) => (
          <Card key={purchase.id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{purchase.title}</Card.Title>
              <Card.Text>{purchase.description}</Card.Text>
              <Button>Review</Button>
              <Button>Refund</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    )
  }
}
export default withRouter(IndexPurchase)
