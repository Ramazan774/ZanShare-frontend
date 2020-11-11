import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectProduct} from '../actions/products'

const ProductCard = props => {
    const link = `/products/${props.product.id}`
    return (
        <div className='item'>
            <div className='ui small image'>
                <img src={props.product.image} alt={props.product.name} />
            </div>
            <div className='item'>
                <h4>{`${props.product.name}`}</h4>
            </div>
            <Link to={link}><button>Details</button></Link>
        </div>
    )
}

const mapDispatchToProps = {
    selectProduct
}

export default connect(null, mapDispatchToProps)(ProductCard)