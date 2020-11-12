const listings = (state=[], action) => {
    switch(action.type) {
        case 'ADD_LISTING_SUCCESS':
            return [...state, action.listings];
        case 'CHECKOUT_SUCCESS':
            return [];
        default:
            return state
    }
}

export default listings