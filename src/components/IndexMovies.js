// Imports:
// - React, Component
import React, { Component } from 'react'
// - Link
import { withRouter } from 'react-router-dom'
// - indexMovies (or something) (api function)
import { indexMovies } from '../api/auth'
import { Card, Button } from 'react-bootstrap'
// - optional messages

// Create a new class inherits from Component
class IndexMovies extends Component {
  // - constructor (set up initial state)
  constructor (props) {
    super(props)

    this.state = {
      movies: []
      // movies: null
    }
  }

  // - lifecycle method (right away when this component renders, make a request for all the movies & put em in state)
  componentDidMount () {
    const { user, msgAlert } = this.props
    indexMovies(user)
      .then(res => this.setState({ movies: res.data.movies }))
      .then(() => msgAlert({ heading: 'Index success', message: 'Here\'s the movies', variant: 'success' }))
      .catch(err => msgAlert({ heading: 'Index failed :(', message: 'Something went wrong: ' + err.message, variant: 'danger' }))
  }

  // - render - display the movies in the state (optionally: loading message)
  render () {
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

    let movieJsx
    if (movies.length === 0) {
      movieJsx = 'No movies'
    } else {
      // I want movieJsx to be a bunch of li or Link or something with all my movies info in them
      // .map gives us back a new array that we can display
      movieJsx = movies.map((movie) => (
        <Card key={movie.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Button className="button">Purchase ${movie.price} </Button>
          </Card.Body>
        </Card>
      ))
    }

    return (
      <div style={cardContainerLayout}>
        {movieJsx}
      </div>
    )
  }
}

export default withRouter(IndexMovies)
// export - don't forget!
