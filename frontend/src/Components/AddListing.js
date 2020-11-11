import React from 'react'
import { Button, Checkbox, Form, Input, TextArea} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addListingSuccess } from '../actions/listings'


class AddListing extends React.Component {
    state = {
        id: '',
        name: '',
        address: '',
        description: '',
        start_date: '',
        end_date: '',
        image: '',
        comment: '',
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
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                description: this.state.description,
                start_date: this.state.start_date,
                end_date: this.state.end_date,
                image: this.state.image,
                comment: this.state.comment,
                user_id: this.props.user.id
            })
        }

        fetch('http://localhost:3000/listings', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                this.setState({
                    error: data.error
                })
            } else {
                this.props.addListingSuccess(data)
                this.props.history.push('/profile')
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
                    </Form.Group>
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
        listings: state.listings
    }
}

const mapDispatchToProps = {
    addListingSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)
