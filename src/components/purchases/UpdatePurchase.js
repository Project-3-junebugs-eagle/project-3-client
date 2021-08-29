/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getPurchase, reviewMovie } from '../../api/purchases'
import ReviewForm from '../ReviewForm'
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
      .then((res) => this.setState({ purchase: res.data.purchase[0] }))
      .then(() => console.log(this.state))
      .then(() =>
        msgAlert({
          heading: 'Write a review',
          message: 'Review your movie here',
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

	handleChange = (event) => {
	  // because `this.state.movie` is an object with multiple keys, we have to do some fancy updating
	  const userInput = { [event.target.name]: event.target.value }
	  this.setState((currState) => {
	    // "Spread" out current movie state key/value pairs, then add the new one at the end
	    // this will override the old key/value pair in the state but leave the others untouched
	    return { purchase: { ...currState.purchase, ...userInput } }
	  })
	}

	handleSubmit = (event) => {
	  event.preventDefault()

	  const { user, msgAlert, history, match } = this.props

	  reviewMovie(this.state.purchase, match.params.id, user)
	    .then((res) => history.push('/purchases'))
	    .then(() =>
	      msgAlert({
	        heading: 'Movie Updated!',
	        message: 'Nice work, go check out your movie.',
	        variant: 'success'
	      })
	    )
	    .catch((err) => {
	      msgAlert({
	        heading: 'Movie update failed :(',
	        message: 'Something went wrong: ' + err.message,
	        variant: 'danger'
	      })
	    })
	}

	render () {
	  return (
	    <>
	      <h3>Add your review for <em>{this.state.purchase.title}</em></h3>
	      <ReviewForm
	        purchase={this.state.purchase}
	        handleSubmit={this.handleSubmit}
	        handleChange={this.handleChange}
	      />
	    </>
	  )
	}
}

export default withRouter(UpdatePurchase)
