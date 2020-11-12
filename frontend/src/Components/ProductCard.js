import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectProduct} from '../actions/products'

const ProductCard = props => {
    const link = `/products/${props.product.id}`
    
    return (
        <div className='item'>
            <div className='item'>
                <h4>{`${props.product.name}`}</h4>
            </div>
            <br></br>
            <div className='ui small image'>
                <img src={props.product.image_url} />
                <br></br>
                <Link to={link}><Button>Details</Button></Link>
                <br></br>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    selectProduct
}

export default connect(null, mapDispatchToProps)(ProductCard)