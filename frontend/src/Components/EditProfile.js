import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../actions/user'
import {editUserSuccess } from '../actions/user'
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
            fetch(`http://localhost:3000/users/${this.props.user.id}`)
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

        fetch(`http://localhost:3000/users/${id}`, method: 'DELETE')
        .then(resp => resp.json())
        .then(data => {
            this.props.deleteUser(id)
            this.props.history.push('/login')
        })
    }
}

