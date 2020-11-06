import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/user'
import { Grid, Card, Image, Form, Button } from 'semantic-ui-react'
import Listings from './Listings'
import { editUserSuccess } from '../actions/user'
import { Link } from 'react-router-dom'
import {EditListing} from './EditListing'
import { ProductsContainer } from './ProductsContainer'

class Profile extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/editlisting/:id' render={() => <h4>Edit Listing</h4>} />
                    <Route path='/productscontainer' component={ ProductsContainer } />
                    <button className='delete-btn'>Delete</button>
                </Switch>
                <p>Profile</p>
            </div>
        )
    }
}

export default Profile
