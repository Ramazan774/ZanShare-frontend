import React from 'react'
import ProductsContainer from './containers/ProductsContainer'
import ProductShowPage from '.components/ProductShowPage'

class Home extends React.Component {

    componentDidMount(){
        const token = localStorage.getItem('app_token')

        if(!token){
            this.props.history.push('/login')
        } else {

            const reqObj = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }

            fetch('http://localhost:3000/current_user', reqObj)
            .then(resp => resp.json())
            .then(data => {
                if(data.user) {
                    this.props.currentUser(data.user)
                    fetch('http://localhost:3000/products')
                    .then(resp => resp.json())
                    .then(products => {
                        let newProducts = products.filter(product => product.user_id === data.user.id)
                        this.props.fetchProductsSuccess(newProducts)
                    })
                }
            })
        }
    }

    renderProducts = () => {
        let productsList = this.props.notes.filter(products => products.title.toLowerCase().includes(this.props.search.toLowerCase()))
        return productsList.map((product, index) => (
            <ProductShowPage key={index} product={product} history={this.props.history} />
        ))
    }

    render() {
        return (
            <div className='App'>
                <br></br>
                {this.renderProducts()}
                <br></br>
            </div>
        )
    }
}


export default Home
