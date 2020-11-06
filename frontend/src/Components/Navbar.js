import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Menu } from 'semantic-ui-react'
import { logoutSuccess } from '../actions/user'
import { connect } from 'react-redux'
import { searchProducts } from '../actions/search'

class Navbar extends React.Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name })

    handleLogout = () => {
        this.props.logoutSuccess()
        localStorage.removeItem('app_token')
    }

    handleChange = (e) => {
        e.persist()
        this.props.searchProducts(e)
    }

    render () {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/'
                />
                <Menu.Item
                    name='Share Your Product'
                    active={activeItem === 'Share Your Product'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/addlisting'
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Sign Up'
                        active={activeItem === 'Sign Up'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/signup'
                    />
                    <Menu.Item
                        name='Login'
                        active={activeItem === 'Login'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/login'
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        search: state.search
    }
}

const mapDispatchToProps = {
    logoutSuccess,
    searchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)