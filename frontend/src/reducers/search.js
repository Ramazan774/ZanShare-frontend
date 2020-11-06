const search = (state='', action) => {
    switch(action.type) {
        case 'SEARCH_LISTINGS':
            return action.search.target.value
        case 'SEARCH_PRODUCTS':
            return action.search.target.value
        default:
            return state
    }
}

export default search