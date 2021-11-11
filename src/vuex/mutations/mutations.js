export default {
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
    SET_FAVORITE: (state, product) => {
        if(state.favorite.indexOf(product)!=-1){
            state.favorite.splice(state.favorite.indexOf(product), 1)
        }else {
            state.favorite.push(product)
            
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
    },
    REMOVE_FROM_FAVORITE: (state,index) => {
        state.favorite.splice(index, 1)
    },
    CHANGE_THIS_PAGE: (state, page) => {
        state.page = page
    },
    CHANGE_FIRST_PAGE: (state) => {
        state.page = 1;
    },
    SET_SEARCH_VALUE_TO_STATE: (state, value) => {
        state.searchValue = value;
    }

}