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
        
        const link = `/products`
        const button = this.props.user.id === this.props.product[0].user_id ? 
            <Link to="/editproduct"><Button onClick={() => this.props.selectProduct(this.props.product[0].id)}>Edit</Button></Link>
            :
            <Link to='/products'><Button onClick={() => this.props.addListingSuccess(this.props.product[0])}>Rent</Button></Link>

        return(
            <div>
                <h4>{this.props.product[0].name}</h4>
                <img src={this.props.product[0].image} alt={this.props.product[0].name} />
                <h5>{this.props.product[0].start_date}</h5>
                <p>{this.props.product[0].address}</p>
                <p>{this.props.product[0].description}</p>
                <Link to={link}><button>Back</button></Link>
                {button}
                {/* <Link to={'/products'}><button>Book</button></Link> */}
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