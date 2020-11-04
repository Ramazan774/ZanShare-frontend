import React from 'react'
import { Tab, Feed, Icon, Card, Grid, List } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'
import {EditListing} from './Components/EditListing'
import { ProductsContainer } from './Components/ProductsContainer'

class Profile extends React.Component {

    let history = useHistory()
    
    render() {
        return (
            <div>
                <p>Profile</p>
            </div>
        )
    }
}

export default Profile
