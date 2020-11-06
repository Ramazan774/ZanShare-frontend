const listings = (state=[], action) => {
    switch(action.type) {
        case 'CURRENT_USER':
            const listings = action.user.listings
            return listings
        case 'FETCH_LISTINGS_SUCCESS':
            const listings = [...action.listings]
            return listings
        case 'NEW_LISTING_SUCCESS':
            return [...state, action.listings]
        case 'DELETE_LISTING_SUCCESS':
            const newListings = state.filter(obj => obj.id !== action.id)
                return newListings
        default:
            return state
    }
}

export default listings