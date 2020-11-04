import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: '',
        password: '',
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

        fetch('http://localhost:3000/auth', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                this.setState({
                    error: data.error
                })
            } else {
                localStorage.setItem('app_token', data.token)
                this.props.history.push('/')
            }
        })
    }


    render() {
        return (
            <div className='loginform text-center'>
                <h3>Log in</h3>
                { this.state.error && <h4 style={{color: 'red'}}>{this.state.error}</h4> }
                <form onSubmit={this.handleSubmit}>
                    <input name={'email'} onChange={this.handleInputChange} value={this.state.email} placeholder='Email' />
                    <input name={'password'} onChange={this.handleInputChange} value={this.state.password} placeholder='Password' />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
                <Link className='home-link loginLink' to='/signup'>Not a member yet?</Link>
            </div>
        )
    }
}

export default Login
