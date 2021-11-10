
export default {
    

    ADD_TO_CART({commit}, product) {
        
        commit('SET_CART', product);
    },
    ADD_TO_FAVORITE({commit}, product) {
        commit('SET_FAVORITE', product)
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('INCREMENT',index);
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DECREMENT', index);
    },
    DEL_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
    },
    CHANGE_PAGE({commit}, page) {
        commit ('CHANGE_THIS_PAGE', page)
    },
    TO_FIRST_PAGE({commit}) {
        commit ('CHANGE_FIRST_PAGE')
    }
}