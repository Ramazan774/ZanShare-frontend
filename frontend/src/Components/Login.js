import React from 'react'
import {connect} from 'react-redux'
import {loginSuccess} from '../actions/auth'

class Login extends Component {

    state = {
        email: 'fake@fake.com',
        password: 'hello',
        error: null
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/api/v1/auth', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                this.setState({
                    error: data.error
                })
            } else {
                localStorage.setItem('app_token', data.token)

                this.props.loginSuccess(data.user)
                this.props.history.push('/home')
            }
        })
    }


    render() {
        return (
            <div>
                <h3>Log in</h3>
                { this.state.error && <h4 style={{color: 'red'}}>{this.state.error}</h4> }
                <form onSubmit={this.handleSubmit}>
                    <input name={'email'} onChange={this.handleInputChange} value={this.state.email} />
                    <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
                    <input type='submit' value='login' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
