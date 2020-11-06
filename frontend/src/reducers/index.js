import { combineReducers } from 'redux'
import products from './products'
import user from './user'
import search from './search'
import listings from './listings'

export default combineReducers({
    user,
    products,
    listings,
    search
})