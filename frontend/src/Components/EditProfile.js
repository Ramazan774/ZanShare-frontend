import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/user'
import { editUserSuccess } from '../actions/user'
import { Link } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'

class EditProfile extends React.Component {
    state = {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        phone_number: '',
        password: ''
    }

    componentDidMount() {
        const token = localStorage.getItem('app_token')
        if(!token){
            this.props.history.push('/login')
        } else {
            fetch(`http://localhost:3001/users/${this.props.user.id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({id: data.id, first_name: data.first_name, last_name: data.last_name, email: data.email, age: data.age, phone_number: data.phone_number, password: data.password})
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                first_name: this.state.first_name,
                last_name: this.state.first_name,
                age: this.state.age,
                phone_number: this.state.phone_number,
                password: this.state.password
            })
        }

        fetch(`http://localhost:3000/users/${this.state.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.editUserSuccess(data)
            this.props.history.push('/profile')
        })
    }

    deleteUser = (id) => {
        const reqObj = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3000/users/${id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteUser(id)
            this.props.history.push('/login')
        })
    }


    render() {
        return (
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
                <Button type='submit'>Update</Button>
                <Button onClick={() => this.deleteUser(this.props.user.id)}>Delete Profile</Button>
            </Form>
        )
    }
}
    

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    deleteUser,
    editUserSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)

