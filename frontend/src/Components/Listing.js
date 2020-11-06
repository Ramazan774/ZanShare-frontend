import React from 'react'
import { Link } from 'react-router-dom'

const Listing = (props) => {
    return(
        <li>
            <Link to={`/listings/${props.listing.id}`}>{props.listing.name}</Link>
        </li>
    )
}

export default Listing
