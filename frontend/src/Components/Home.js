import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { searchProducts } from '../actions/search'
// import { logoutSuccess } from '../actions/user'
import { connect } from 'react-redux'
import { currentUser } from '../actions/user'
// import { Link } from 'react-router-dom'

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
                this.props.currentUser(data.user)
            })
        }
    }

    handleChange = (e) => {
        e.persist();
        this.props.searchProducts(e);
    };

    render() {
        return (
        <Menu>
            <Menu.Menu>
            <Input
                onChange={this.handleChange}
                icon="search"
                placeholder="Search..."
            />
            </Menu.Menu>
        </Menu>
        );
    }
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
