const products = (state = [], action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
            const products = [...action.products];
            return products;
        default:
            return state;
    }
}

export default products;
