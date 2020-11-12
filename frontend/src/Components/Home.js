import React from 'react'
import { Form, Input, Menu, Button } from 'semantic-ui-react'
import { searchProducts } from '../actions/search'
import { connect } from 'react-redux'
import { currentUser } from '../actions/user'
import ProductsContainer from './ProductsContainer'
import { Link } from 'react-router-dom'
import { fetchProductsSuccess } from '../actions/products'

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

            fetch('http://localhost:3000/current_session', reqObj)
            .then(resp => resp.json())
            .then(data => {
                this.props.currentUser(data.user)
                    fetch("http://localhost:3000/products")
                    .then((resp) => resp.json())
                    .then((products) => {
                        this.props.fetchProductsSuccess(products);
                    })
            })
        }
    }

    
    

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.searchProducts(e)
        if (this.props.search === "") {
          return;
        } else {
            this.props.history.push('/products')
        }
    }

    // renderProducts = () => {
        
    //     if (this.props.search === ""){
    //         debugger
    //         return 
    //     } else {
    //         let productsList = this.props.products.filter(products => products.name.toLowerCase().includes(this.props.search.toLowerCase()) || products.description.toLowerCase().includes(this.props.search.toLowerCase()))
    //     }
        
    // }

    render() {
        return (
          <div>
            <Menu>
              <Menu.Menu>
                <p style={{textAlign: 'center'}}>Your place to rent from trusted hosts</p>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input
                    style={{marginTop: '300px', width: '500px'}}
                    name="search"
                    placeholder="Search..."
                    icon={ <Button icon="search" type="submit" /> }
                  />
                </Form>
              </Menu.Menu>
            </Menu>
          </div>
        );}
    }

    const mapStateToProps = (state) => {
        return {
            user: state.user,
            search: state.search,
        }
    }

    const mapDispatchToProps = {
        currentUser,
        searchProducts,
        fetchProductsSuccess
    }


    export default connect(mapStateToProps, mapDispatchToProps)(Home)
