import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ReviewForm = ({ purchase, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Control
        size='lg'
        required
        name='review'
        value={purchase.review}
        placeholder='Review'
        onChange={handleChange}
      />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default ReviewForm
