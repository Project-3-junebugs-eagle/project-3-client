/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
// - Link
import { withRouter } from 'react-router-dom'
// - indexMovies (or something) (api function)
import { indexMovies } from '../api/movies'
import { Card } from 'react-bootstrap'

// - optional messages

// Create a new class inherits from Component
class IndexMoviesUnauth extends Component {
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
    indexMovies()
      .then((res) => this.setState({ movies: res.data.movies }))
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
            <Card.Img variant='top' src={movie.imgUrl} />
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
        </Card>
      ))
	  }

	  return (
      <>
        <h3>Sign in to purchase a movie</h3>
        <div style={cardContainerLayout}>{movieJsx}</div>
      </>
    )
  }
}

export default withRouter(IndexMoviesUnauth)
