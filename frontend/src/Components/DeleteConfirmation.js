import React from 'react'

const Listing = props => {
    return (
        <div className='item'>
            <div className='middle aligned content'>
                <h1>Are you sure you want to remove this?</h1>
                <div className='ui buttons'>
                    <div
                        onClick={props.handleCancelClick}
                        className='ui basic green button'
                    >
                        No
                    </div>
                    <div className='ui red basic button'>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default Listing