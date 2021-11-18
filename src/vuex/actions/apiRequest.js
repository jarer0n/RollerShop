import axios from 'axios';
import store from '../store';
export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios.get('http://217.25.89.87:3000/products', {
        })
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return(products);
        })
        .then(() => {
            store.state.totalPages = Math.ceil(store.state.products.length / store.state.productsOnPage );
        })
        .catch((error) => {
            console.log(error)
            return error;
        })
    },
}