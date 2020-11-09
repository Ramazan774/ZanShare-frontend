import React from 'react'
// import {Link} from 'react-router-dom'
import { Grid, Button, Form, Container } from 'semantic-ui-react'
import { loginSuccess } from '../actions/user'
import { connect } from 'react-redux'

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

        fetch('http://localhost:3000/users/login', reqObj)
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
                <Container>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column width={7}>
                                {this.state.error && <h4 style={{ color: 'red' }}>{this.state.error}</h4>}
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Input
                                        icon='user'
                                        iconPosition='left'
                                        type='text'
                                        placeholder='Email'
                                        name={'email'}
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                    />
                                    <br></br>
                                    <Form.Input
                                        icon='lock'
                                        iconPosition='left'
                                        type='password'
                                        placeholder='Password'
                                        name={'password'}
                                        onChange={this.handleInputChange}
                                        value={this.state.password}
                                    />
                                    <br></br>
                                    <div style={{textAlign: 'center'}}>
                                        <Button style={{color: 'blue'}}>
                                            <Button.Content>Login</Button.Content>
                                        </Button>
                                    </div>
                                    <br></br>
                                    <div style={{textAlign: "center"}}>
                                        <p>Not a member yet?</p>
                                        <Button>
                                            <Button.Content style={{color: 'blue'}}>Sign Up</Button.Content>
                                        </Button>
                                    </div>
                                    
                                    <br></br>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)
