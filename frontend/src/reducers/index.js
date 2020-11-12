import { combineReducers } from 'redux'
import products from './products'
import user from './user'
import listings from './listings'
import search from './search'


export default combineReducers({
    user,
    products,
    listings,
    search
})