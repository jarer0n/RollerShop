
import {createStore} from 'vuex'

import commonActions from './actions/actions';
import apiRequest from './actions/apiRequest';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = {...commonActions, ...apiRequest}

export default createStore({
    state: {
        products: [],
        cart: [],
        productsOnPage: 8,
        page: 1,
        totalPages: 0
    },
    mutations,
    actions,
    getters,
})


