import React from 'react'
// import { connect } from 'react-redux'

const ProductShowPage = props => {
    return (
        <div className='item'>
            <div className='ui small image'>
                <img src={props.product.image} alt={props.product.name} />
            </div>
            <div className='item'>
                <h4>{`${props.product.name}`}</h4>
            </div>
        </div>
    )
}

export default ProductShowPage