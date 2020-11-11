import React from 'react'
import { connect } from 'react-redux'
import { selectProduct } from '../actions/products'

class ProductShowCard extends React.Component {
    componentDidMount(){
        this.props.selectProduct(this.props.match.params.id)
    }

    render (){
        // debugger
        return(
            <div>{this.props.product[0].name}</div>
            )
        }

    
}

const mapStateToProps = (state) => {
    return {
        product: state.products
    }
}

const mapDispatchToProps = {
    selectProduct
} 
export default connect(mapStateToProps, mapDispatchToProps)(ProductShowCard)