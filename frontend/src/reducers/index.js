import { combineReducers } from 'redux'
import products from './products'
import authReducer from './auth'
import search from './search'
import listings from './listings'

export default combineReducers({
    auth: authReducer,
    products,
    listings,
    search
})