import React from 'react'
import { connect } from 'react-redux'
import { editProductSuccess } from '../actions/products'
import { selectProduct } from '../actions/products' 
import { Form, Input, TextArea, Button, Checkbox } from 'semantic-ui-react'
// import DeleteConfirmation from './DeleteConfirmation'

class EditProduct extends React.Component {
    
    state = {
        name: '',
        address: '',
        description: '',
        start_time: '',
        end_time: '',
        image_url: '',
        comment: '',
        user_id: this.props.user.id,
        error: null
    }

    componentDidMount(){
        this.props.selectProduct(this.props.match.params.id)
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
            body: JSON.stringify(this.state)
        }

        fetch(`http://localhost:3000/products/${this.state.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
                this.props.editProductSuccess(data)
                this.props.history.push('/home')
            }
        )
    }

    render(){
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
                            name="start_time"
                            placeholder='MM/DD/YYYY'
                            onChange={this.handleChange}
                            value={this.state.start_time}
                        />
                        <Form.Field
                            control={Input}
                            label='End Date'
                            name="end_time"
                            placeholder='MM/DD/YYYY'
                            onChange={this.handleChange}
                            value={this.state.end_time}
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
                    <Form.Field control={Button}>Update</Form.Field>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};


const mapDispatchToProps = {
    selectProduct,
    editProductSuccess
}


export default connect(mapStateToProps,mapDispatchToProps)(EditProduct)