import React, { Component } from 'react'
import { getBooks } from '../api/auth'

export default class GetBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount () {
    getBooks()
      .then((response) => {
        this.setState({
          books: response.data.books
        })
      })
      .catch(console.error)
  }

  render () {
    return (
      <div>
        {this.state.books.map((book) => (
          <li key={book._id}>
            {book.title}
          </li>
        ))}
      </div>
    )
  }
}
