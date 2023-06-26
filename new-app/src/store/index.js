import { createStore } from 'redux';
import { createSlice, configureStore} from '@reduxjs/toolkit';

 const initialise = {openCart: false};
const cartReducer = createSlice({

    name:'cart',
    initialState:initialise,
    reducers:{
        open(state){
            state.openCart = !state.openCart
        },
     
    }

})


const initialiseQuantity= {totalquantity:0,quantity: 0,items:[]};
const quanttiyReducer = createSlice({

    name:'quantity',
    initialState:initialiseQuantity,
    reducers:{
       
            replaceCart(state, action) {
              state.totalquantity = action.payload.totalquantity;
              state.items = action.payload.items;
            },
        addItemToCart(state, action) {
            const newItem = action.payload;
            let itemExists = false;
          
            state.items.forEach(item => {
              if (item.id === newItem.id) {
                item.quantity++;
                item.totalprice = item.price * item.quantity;
                itemExists = true;
              }
            });
          
            if (!itemExists) {
              state.items.push({
                name: newItem.title,
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalprice: newItem.price
              });
              state.totalquantity++;
            }
          },
          
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item =>item.id ==id);
            state.totalquantity--;

            if(existingItem.quantity == 1){
                state.items = state.items.find(item =>item.id !== id);
            }else{
                existingItem.quantity --;
                existingItem.totalprice = existingItem.price * existingItem.quantity;
            }
        },
    
    }

})
const store = configureStore({reducer:{cart:cartReducer.reducer,quantity:quanttiyReducer.reducer}})

// const store = createStore(cartReducer);
export const cartAction = cartReducer.actions;
export const quantityAction = quanttiyReducer.actions;
export default store;