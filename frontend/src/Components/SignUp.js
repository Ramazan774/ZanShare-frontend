import React from 'react'
import { Fragment } from 'react'

class SignUp extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault()

        const {firstname, lastname, email, age, password}
        const newUser = {firstname: firstname.value, lastname: lastname.value, email: email.value, phonenumber: phonenumber.value, password: password.value, age: age.value}
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: newUser})
        }

        fetch('http://localhost:3000/auth', reqObj)
        .then(resp => resp.json())
        .then(user => this.props.history.push('/'))
    }

    userForm = () => {
        return(
            <Fragment>
                <form className='new-form' onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                        <div className='col-md-6 mb-3'>
                            <input name='firstname' type='text' className='form-control' placeholder='First Name' required />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <input name='lastname' type='text' className='form-control' placeholder='Last Name' required />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <input name='age' type='number' className='form-control' placeholder='Age' />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <input name='phone' type='number' className='form-control' placeholder='Phone Number' />
                        </div> 
                        <div className='col-md-6 mb-3'>
                            <input name='password' type='password' className='form-control' placeholder='password' />
                        </div>
                    </div>
                    <button className='btn btn-primary' type='submit'>Sign Up</button>
                </form>
            </Fragment>
        )
    }

    render(){
        return(
            <div className='signup'>
                <h1>Sign Up</h1>
                {this.userForm()}
            </div>
        )
    }
}

export default SignUp