import React from 'react'
import Listings from './Listings'
import DeleteConfirmation from './DeleteConfirmation'

class EditListings extends React.Component {
    constructor(){
        super()

        this.state = {
            deleteView: false
        }
    }

    handleToggle = () => {
        this.setState({deleteView: !this.state.deleteView})
    }

    render(){
        return this.state.deleteView ? (
            <DeleteConfirmation
                handleCancelClick={this.handleToggle}
                listing={this.props.listing}
            />
        ) : (
            <Listings
                listing={this.props.listing}
                handleDelete={this.handleToggle}
            />
        )
    }
}

export default EditListings