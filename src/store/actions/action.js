import axios from 'axios';

// get the products from api
export const getData = () => {
    return async (dispatch) => {
        const res = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
        dispatch(handleApiData(res.data.results));
        console.log(res.data);
    };
};

// load the products
export const handleApiData = (payload) => {
    return {
        type: 'LOAD_PRODUCTS',
        payload,
    };
};

// change active products
export function getItems(name) {
    return {
        type: 'changeActive',
        payload: name
    }
}

// change the inStock items (reducing)
export function changeBasketItems(product) {
    return {
        type: 'Change-Basket-Items',
        payload: product
    }
}

// change the active category
export function changeSelected(category) {
    return {
        type: 'ChangeActive',
        payload: category
    }
}

// add items to the cart
export function addItemsToCart(product) {
    return {
        type: 'AddItemsCart',
        payload: product
    }
};
