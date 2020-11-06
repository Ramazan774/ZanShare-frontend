import React from 'react'
// import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Listings extends React.Component {

    renderListings = () => {
        return this.props.listings.map((listing, index) => (
            <Listing key={index} listing={listing} history={this.props.history} />
        ))
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