import React from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { Button } from 'semantic-ui-react'
import {checkoutSuccess} from '../actions/listings'
import { Link } from 'react-router-dom'

class Listings extends React.Component {

    noListings = () => {
        return(
            <h3>No listings</h3>
        )
    }

    renderListings = () => {
        return this.props.listings.map((listing, index) => {
            return <ProductCard product={listing}/>
        })
    }
    

    render(){
        return(
            <div>
                <h2>Listings</h2>
                {this.renderListings()}
                <br></br>
                <Link to='/home'><Button onClick={this.props.checkoutSuccess}>Checkout</Button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = {
    checkoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)