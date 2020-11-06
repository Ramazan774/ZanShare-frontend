import React from 'react'
// import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Listing from './Listing'
// import { Link } from 'react-router-dom'

class Listings extends React.Component {

    state = {
        listings: [],
        id: ''
    }

    noListings = () => {
        return(
            <h3>No listings</h3>
        )
    }

    renderListings = () => {
        return this.props.listings.map((listing, index) => {
            return <Listing key={index} listing={listing} history={this.props.history} />
        })
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/listings')
        .then(resp => resp.json())
        .then(listings => {
            this.props.fetchListingsSuccess(listings)
        })
    }

    render(){
        return(
            <div>
                <h4>Listings</h4>
                {this.renderListings()}
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

export default connect(mapStateToProps, null)(Listings)