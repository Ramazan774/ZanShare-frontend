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

export const addProductSuccess = (products) => {
    return {
        type: 'ADD_PRODUCT_SUCCESS',
        products: products
    }
}

export const deleteProductSuccess = (products) => {
    return {
        type: 'DELETE_PRODUCT_SUCCESS',
        products: products
    }
}

export const editProductSuccess = (products) => {
    return {
        type: 'EDIT_PRODUCT_SUCCESS',
        products: products
    }
}
