const products = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            return [...action.products]
        case "SELECT_PRODUCT":
            const selectProduct = state.filter(product => product.id === parseInt(action.id))
            return selectProduct
        case 'NEW_PRODUCT_SUCCESS':
            return [...state, action.products]
        case 'DELETE_PRODUCT_SUCCESS':
            const newProducts = state.filter(obj => obj.id !== action.id)
                return newProducts
        default:
            return state;
    }
}

export default products;
