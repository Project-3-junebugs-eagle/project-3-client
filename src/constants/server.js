/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
const PAYMENT_SERVER_URL =
	process.env.NODE_ENV === 'production'
	  ? 'https://secure-taiga-59525.herokuapp.com'
	  : 'http://localhost:4741'

export default PAYMENT_SERVER_URL
