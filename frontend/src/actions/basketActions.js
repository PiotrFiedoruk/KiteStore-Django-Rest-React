import axios from 'axios'
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from '../constants/basketConstants'

// get state gets part of state
export const addToBasket = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: BASKET_ADD_ITEM,
        payload:{
            product: data._id, //id passed as 'product' in basketReducers
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    // pass on data to local storage, neds to be stringtype
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems))
}

export const removeFromBasket = (id) => (dispatch, getState) => {
    dispatch({
        type:BASKET_REMOVE_ITEM,
        payload: id,
    })
    
    localStorage.setItem('basketItems', JSON.stringify(getState().basket.basketItems))
}