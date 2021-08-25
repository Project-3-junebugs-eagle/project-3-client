import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getPurchase } from '../../api/purchases'
class UpdatePurchase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      purchase: {
        title: '',
        description: '',
        price: '',
        review: ''
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    getPurchase(match.params.id, user)
      .then((res) => this.setState({ movie: res.data.purchase }))
      .then(() =>
        msgAlert({
          heading: 'Show movie success',
          message: 'Check out the movie',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Show movie failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  render () {
    return <div>
      this is working
    </div>
  }
}
export default withRouter(UpdatePurchase)
