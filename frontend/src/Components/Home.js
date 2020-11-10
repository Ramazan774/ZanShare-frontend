import React from 'react'
import { Form, Input, Menu, Button } from 'semantic-ui-react'
import { searchProducts } from '../actions/search'
// import { logoutSuccess } from '../actions/user'
import { connect } from 'react-redux'
import { currentUser } from '../actions/user'
// import Navbar from './Navbar.js'
import ProductsContainer from './ProductsContainer'
import { Link } from 'react-router-dom'

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
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchProducts(e)
        this.props.history.push('/products')
    }

    renderProducts = () => {
        debugger
        let productsList = this.props.products.filter(products => products.name.toLowerCase().includes(this.props.search.toLowerCase()) || products.description.toLowerCase().includes(this.props.search.toLowerCase()))
    }

    render() {
        return (
          <div>
            <Menu>
              <Menu.Menu>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input
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
        searchProducts
    }


    export default connect(mapStateToProps, mapDispatchToProps)(Home)
