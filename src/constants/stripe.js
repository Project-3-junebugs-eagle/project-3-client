/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
const STRIPE_PUBLISHABLE =
	process.env.NODE_ENV === 'production'
	  ? 'pk_test_51JSk3WBTmuyaUYrEPFAdU0cxfR75txhtOjEzVeCStfhkK4lgyNjRmTX8Szag2nGhHh5HBixKhKTILPCUJXKZNdf100jOmTkhco'
	  : 'pk_test_51JSk3WBTmuyaUYrEPFAdU0cxfR75txhtOjEzVeCStfhkK4lgyNjRmTX8Szag2nGhHh5HBixKhKTILPCUJXKZNdf100jOmTkhco'

export default STRIPE_PUBLISHABLE
