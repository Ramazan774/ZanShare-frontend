import React from 'react'
import {Link} from 'react-router-dom'

// import {currentUser} from '../actions/auth'

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

            fetch('http://localhost:3000/api/v1/current_user', reqObj)
            .then(resp => resp.json())
            .then(data => {
                this.props.currentUser(data.user)
            })
        }
    }

    render() {
        return (
            <div>
                <h5>Your place to rent from hosts</h5>
            </div>
        )
    }
}


export default Home
