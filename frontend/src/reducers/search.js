const search = (state='', action) => {
    switch(action.type) {
        case 'SEARCH_PRODUCTS':
            return action.search.target.search.value;
        // case 'FETCH_PRODUCTS_SUCCESS':
        //     return ''
        default:
            return state
    }
}

export default search