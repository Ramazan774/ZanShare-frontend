export const fetchProductsSuccess = (products) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        products: products
    }
}

export const selectProduct = (id) => {
    return {
        type: "SELECT_PRODUCT",
        id: id
    }
}
