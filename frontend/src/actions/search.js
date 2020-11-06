export const searchListings = (search) => {
    return {
        type: 'SEARCH_LISTINGS',
        search: search
    }
}

export const searchProducts = (search) => {
    return {
        type: 'SEARCH_PRODUCTS',
        search: search
    }
}