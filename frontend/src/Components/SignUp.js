import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { createUserSuccess } from '../actions/user'
import { connect } from 'react-redux'

class SignUp extends React.Component{
    state = {
        id:'',
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        phone_number: '',
        password: '',
        error: null
    }

    handleChange = (e) => {
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

        fetch('http://localhost:3001/auth', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                this.setState({
                    error: data.error
                })
            } else {
                this.props.createUserSuccess(data)
                this.props.history.push('/home')
            }
        })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    name='first_name'
                    placeholder='First Name'
                    onChange={this.handleChange}
                    value={this.state.first_name}
                />
                <Form.Input
                    name='last_name'
                    placeholder='Last Name'
                    onChange={this.handleChange}
                    value={this.state.last_name}
                />
                <Form.Input required
                    name='email'
                    placeholder='Email'
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                <Form.Input
                    type='number' min={18}
                    name='age'
                    placeholder='Age'
                    onChange={this.handleChange}
                    value={this.state.age}
                />
                <Form.Input
                    type='number'
                    name='phone_number'
                    placeholder='(xxx) xxx xxxx'
                    onChange={this.handleChange}
                    value={this.state.phone_number}
                />
                <Form.Input
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                    value={this.state.password}
                />
                <Button type='submit'>Sign Up</Button>
            </Form>
        )
    }
}

const mapDispatchToProps = {
    createUserSuccess
}

export default connect(null, mapDispatchToProps)(SignUp)