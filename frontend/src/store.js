import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import {basketReducer} from './reducers/basketReducers'



const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    basket: basketReducer,
})

// get basket items, return empty array if none
const basketItemsFromStorage = localStorage.getItem('basketItems') ?
    JSON.parse(localStorage.getItem('basketItems')) : []

const intialState = {
    basket: { basketItems: basketItemsFromStorage }
}


const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store