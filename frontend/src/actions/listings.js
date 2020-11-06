export const fetchListingsSuccess = (listings) => {
    return {
        type: 'FETCH_LISTINGS_SUCCESS',
        listings: listings
    }
}

export const newListingSuccess = (listings) => {
    return {
        type: 'NEW_LISTING_SUCCESS',
        listings: listings
    }
}

export const deleteListingSuccess = (listings) => {
    return {
        type: 'DELETE_LISTING_SUCCESS',
        listings: listings
    }
}