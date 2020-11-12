import React from 'react'
import ProductsContainer from './ProductsContainer'
import DeleteConfirmation from './DeleteConfirmation'

class EditProduct extends React.Component {
    constructor(){
        super()

        this.state = {
            deleteView: false
        }
    }

    handleToggle = () => {
        this.setState({deleteView: !this.state.deleteView})
    }

    render(){
        return this.state.deleteView ? (
            <DeleteConfirmation
                handleCancelClick={this.handleToggle}
                product={this.props.product}
            />
        ) : (
            <ProductsContainer
                product={this.props.product}
                handleDelete={this.handleToggle}
            />
        )
    }
}

export default EditProduct