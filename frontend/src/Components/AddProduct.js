import React from 'react'
import { Button, Checkbox, Form, Input, TextArea, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addProductSuccess } from '../actions/products'

class AddProduct extends React.Component {
    state = {
        name: '',
        address: '',
        description: '',
        start_date: '',
        end_date: '',
        image_url: '',
        comment: '',
        user_id: this.props.user.id,
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

        fetch('http://localhost:3000/products', reqObj)
        .then(resp => resp.json())
        .then(data => {
            debugger
            if(data.error) {
                this.setState({
                    error: data.error
                })
            } else {
                this.props.addProductSuccess(data)
                this.props.history.push('/products')
            }
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='Name'
                            name="name"
                            placeholder='Name'
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                        <Form.Field
                            control={Input}
                            label='Address'
                            name="address"
                            placeholder='Address'
                            onChange={this.handleChange}
                            value={this.state.address}
                        />
                        <Form.Field
                            control={Input}
                            label='Description'
                            name="description"
                            placeholder='Description'
                            onChange={this.handleChange}
                            value={this.state.description}
                        />
                        <Form.Field
                            control={Input}
                            label='Start Date'
                            name="start_date"
                            placeholder='MM/DD/YYYY'
                            onChange={this.handleChange}
                            value={this.state.start_date}
                        />
                        <Form.Field
                            control={Input}
                            label='End Date'
                            name="end_date"
                            placeholder='MM/DD/YYYY'
                            onChange={this.handleChange}
                            value={this.state.end_date}
                        />
                    </Form.Group>
                    <Form.Field
                        label='Image'
                        name='image_url'
                        value={this.state.image_url}
                        control={Input}
                        onChange={this.handleChange}
                    />
                    <Form.Field
                        control={TextArea}
                        label='Comments'
                        name="comment"
                        placeholder='Tell us more about your product...'
                        onChange={this.handleChange}
                        value={this.state.comment}
                    />
                    <Form.Field
                        control={Checkbox}
                        label='I agree to the Terms and Conditions'
                    />
                    <Form.Field control={Button}>Publish</Form.Field>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        products: state.products
    }
}

const mapDispatchToProps = {
    addProductSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
