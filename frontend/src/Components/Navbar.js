import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input, Menu } from 'semantic-ui-react'
import { logoutSuccess } from '../actions/user'
import { connect } from 'react-redux'
// import { searchProducts } from '../actions/search'

class Navbar extends React.Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name })
    }

    handleLogout = () => {
        localStorage.removeItem('app_token')
        this.props.logoutSuccess()
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
                    to='/home'
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Share Your Product'
                        active={activeItem === 'Share Your Product'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to='/addlisting'
                    />
                    <div className='item'>
                        {/* {
                            this.props.user.id
                        ? */}
                        <Menu.Item
                            name='Sign Up'
                            active={activeItem === 'Sign Up'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/signup'
                        />
                        {/* :
                        <Menu.Item
                            name='Logout'
                            active={activeItem === 'Logout'}
                            onClick={this.handleLogout}
                            as={Link}
                            to='/login'
                        /> */}
                    {/* } */}
                    </div>                  
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)