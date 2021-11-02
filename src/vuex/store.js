
import {createStore} from 'vuex'

import commonActions from './actions/actions';
import apiRequest from './actions/apiRequest';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = {...commonActions, ...apiRequest}

export default createStore({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters,
})


