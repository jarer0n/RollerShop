import axios from 'axios';
import {createStore} from 'vuex'

export default createStore({
    state: {
        products: [],
        cart: []
    },
   
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            product.amount = 1;
            if(state.cart.length){
                let productExists = false;
                state.cart.map(function(i){
                    
                    if(i.article === product.article) {
                        productExists = true;
                        i.amount++
                    } 
                })
                if(!productExists) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }
            
        },
        INCREMENT: (state, index) => {
            state.cart[index].amount++;
        },
        DECREMENT: (state, index) => {
            if(state.cart[index].amount > 1) {
                state.cart[index].amount--;
            }
            
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
            
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"

            })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return(products);
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },

        ADD_TO_CART({commit}, product) {
            
            commit('SET_CART', product);
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT',index);
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index);
        },
        DEL_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index);
        }
    },


    getters: {

        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }

    },
})


