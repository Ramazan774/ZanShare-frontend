import React from 'react'
import { connect } from 'react-redux'
import { selectProduct } from '../actions/products'
import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { addListingSuccess} from '../actions/listings'

class ProductShowCard extends React.Component {
    

    componentDidMount(){
        this.props.selectProduct(this.props.match.params.id)
    }

    render (){
        
        const link = '/products'
        const button = this.props.user.id === this.props.product[0].user_id ? 
            <Link to={`/editproduct/${this.props.product[0].id}`}><Button onClick={() => this.props.selectProduct(this.props.product[0].id)}>Edit</Button></Link>
            :
            <Link to='/listings'><Button onClick={() => this.props.addListingSuccess(this.props.product[0])}>Rent</Button></Link>

        return(
            <div>
                <h3>{this.props.product[0].name}</h3>
                <img src={this.props.product[0].image_url} alt={this.props.product[0].name} height={300} width={300}/>
                <h4>Available Date: {this.props.product[0].start_time}</h4>
                <h4>End Date: {this.props.product[0].end_time}</h4>
                <h5>Address: {this.props.product[0].address}</h5>
                <h5>Description: {this.props.product[0].description}</h5>
                <p>Comments: {this.props.product[0].comment}</p>
                <Link to='/products'><Button>Back</Button></Link>
                {button}
            </div>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        product: state.products
    }
}

const mapDispatchToProps = {
    selectProduct,
    addListingSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShowCard)