import React, { Component } from 'react'
import { getBooks } from '../api/auth'
import apiUrl from '../apiConfig'

export default class GetBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount () {
    getBooks({
      url: apiUrl + '/books',
      method: 'GET'
    })
      .then((response) => {
        this.setState({
          books: response.data.books
        })
      })
      .catch(console.error)
  }

  render () {
    const books = this.state.books.map(book => (
      <li key={book._id}>
        {console.log(book)}
      </li>
    ))
    return (
      <div>
        <p>{books}</p>
      </div>
    )
  }
}
