import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductShowPage from './ProductShowPage'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { fetchProductsSuccess } from '../actions/products'

class ProductsContainer extends React.Component {
    state = {}
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        fetch('http://localhost:3000/products')
        .then(resp => resp.json())
        .then(products => {
            this.props.fetchProductsSuccess(products)
        })
    }

    renderProducts = () => {
        debugger
        const allProducts = this.props.products.map(p => {
            <ProductShowPage
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
            <Switch>
                <Route path='/products/:id' render={(route) => {
                    const id = route.match.params.id
                    const product = this.state.products.find(product => product.id === id)
                    return <ProductShowPage product={product} />
                }} />
            </Switch>
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
