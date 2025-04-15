//tüm stateleri topladığım yer

import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer'; 


const rootReducer = combineReducers({
    cart : cartReducer,
})

export default rootReducer; // rootReducer'ı export ettik
//export type RootState = ReturnType<typeof rootReducer>; // rootReducer'ın tipini aldık 