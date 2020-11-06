import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { searchProducts } from '../actions/search'
import { logoutSuccess } from '../actions/user'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Home extends React.Component {

    handleChange = (e) => {
        e.persist()
        this.props.searchProducts(e)
    }

    render() {
        return (
            <Menu>
                <Menu.Menu>
                    <Input onChange={this.handleChange} icon='search' placeholder='Search...' />
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


export default connect(mapStateToProps, mapDispatchToProps)(Home)
