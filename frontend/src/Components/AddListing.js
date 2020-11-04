import React from 'react'

class AddListing extends React.Component {

    handleSubmit = e => {
        e.preventDefault()

        const listingId = this.props.match.params.id
        const {name, address, description, start_date, end_date, image, comment} = e.target
        const newListing = {name: name.value, address: address.value, description: description.value, start_date: start_date.value, end_date: end_date.value, image: image.value, comment: comment.value, listing_id: listingId}
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({listing: newListing})
        }

        fetch('http://localhost:3000/listings', reqObj)
        .then(resp => resp.json())
        .then(song => this.props.history.push(`/listings/${listingId}`))
    }

    render(){
        return(
            <div className='listing-div new-form'>
                <h2>List your product</h2>
            <Form onSubmit={this.handleSubmit}>
                <input className='form-control' name='name' placeholder='Add product namee' />
                <input className='form-control' name='address' placeholder='Add pick up address' />
                <input className='form-control' name='description' placeholder='Add description' />
                <input className='form-control' name='start date' placeholder='Availability Date' />
                <input className='form-control' name='end date' placeholder='End date' />
                <input className='form-control' name='image' placeholder='Add image' />
                <input className='form-control' name='comment' placeholder='Add comment' />
            </Form>
            </div>
        )
    }
}

export default AddListing
