import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductCard from './ProductCard'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { fetchProductsSuccess } from '../actions/products'

class ProductsContainer extends React.Component {
    state = {}
    constructor(props) {
        super(props)
    }

    renderProducts = () => {
        
        const productsList = this.props.products.filter(products => products.name.toLowerCase().includes(this.props.search.toLowerCase())|| products.description.toLowerCase().includes(this.props.search.toLowerCase()))
        // console.log(productsList, 'Hi')
        const allProducts = productsList.map(p => {
            return <ProductCard
                key = {p.id}
                product = {p}
            />
        })

        return <div>
            <h1>All products</h1>
            <div className='ui items'>{allProducts}</div>
        </div>
    }

    render(){
        return (
            <div>
                {this.renderProducts()}
            <Switch>
                <Route path='/products/:id' render={(route) => {
                    // return this.renderProducts()
                }} />
            </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        search: state.search
    }
}

const mapDispatchToProps = {
    fetchProductsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
