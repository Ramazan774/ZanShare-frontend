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

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                this.setState({
                    error: data.error
                })
            } else {
                this.props.createUserSuccess(data)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Field
                    name='first name'
                    placeholder='First Name'
                    onChange={this.handleChange}
                    value={this.state.first_name}
                />
                <Form.Field
                    name='last name'
                    placeholder='Last Name'
                    onChange={this.handleChange}
                    value={this.state.last_name}
                />
                <Form.Field required
                    name='email'
                    placeholder='Email'
                    onChange={this.handleChange}
                    value={this.state.email}
                />
                <Form.Field
                    name='age'
                    placeholder='Age'
                    onChange={this.handleChange}
                    value={this.state.age}
                />
                <Form.Field
                    name='phone number'
                    placeholder='(xxx) xxx xxxx'
                    onChange={this.handleChange}
                    value={this.state.phone_number}
                />
                <Form.Field
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