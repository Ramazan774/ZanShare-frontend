import React from 'react'
import ProductShowPage from './ProductShowPage'
import { connect } from 'react-redux'
import { fetchProductsSuccess } from '../actions/products'

class ProductsContainer extends React.Component {

    componentDidMount(){
        fetch('http://localhost:3000/products')
        .then(resp => resp.json())
        .then(products => {
            this.props.fetchProductsSuccess(products)
        })
    }

    renderProducts = () => {
        return this.props.products.map(p => {
            <ProductShowPage
                product = {p}
            />
        })
    }

    render(){
        return(
            <div>
                <h1>ProductsContainer</h1>
                <div className='ui items'>{this.renderProducts()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = {
    fetchProductsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)