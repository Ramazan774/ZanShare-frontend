import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutSuccess} from '../actions/auth'

class Navbar extends React.Component {

    handleLogout = () => {
        localStorage.removeItem('app_token')
        this.props.logoutSuccess
    }

    render () {
        return (
            <div>
                <p>Navbar</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logoutSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)