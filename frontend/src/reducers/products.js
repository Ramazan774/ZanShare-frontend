const products = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            // debugger
            // const products = [...action.products];
            return [...action.products]
        case "SELECT_PRODUCT":
            const selectProduct = state.filter(product => product.id !== action.id)
            return selectProduct
        default:
            return state;
    }
}

export default products;
