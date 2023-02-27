import {CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "./actionType";

let productsList = [];
let product = {};
export default function ProductReducer(state = productsList, action) {
    switch(action.type) {
        case CREATE_PRODUCT:
            {
                const maxId = state.length === 0 ? 0 : Math.max(...state.map(x => x.id));
                action.payload.id = maxId +1;
            }
        return [...state,action.payload];
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id);
        case EDIT_PRODUCT:
            {
                product = state.find(product => product.id === action.payload.id);
            }
                return product ;   
        default:
            return state
    }
}
