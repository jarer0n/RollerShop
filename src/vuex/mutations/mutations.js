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
}