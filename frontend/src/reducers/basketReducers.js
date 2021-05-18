import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from '../constants/basketConstants'

export const basketReducer = (state={basketItems:[]}, action) => {
    switch(action.type){

        case BASKET_ADD_ITEM:
            // check if any item already in the basket
            const item = action.payload
            const existItem = state.basketItems.find(x => x.product === item.product)
            
            if(existItem){
                return{
                    ...state,
                    basketItems: state.basketItems.map(x => 
                    x.product === existItem.product ? item : x)   
                }
            }else{
                return{
                    ...state,
                    basketItems: [...state.basketItems, item]
                }
            }

        case BASKET_REMOVE_ITEM:
            return{
                ...state,
                //filter out all the products that does not match id
                basketItems:state.basketItems.filter(x => x.product !== action.payload)
            }

        default:
            return state
    }
}