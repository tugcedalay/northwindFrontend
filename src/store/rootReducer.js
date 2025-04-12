//tum stateleri topladıgımız yer
import { combineReducers } from 'redux'
import cartReducer from './reducers/cartReducer'


const rootReducer = combineReducers({
    cart : cartReducer,
    // diğer reducer'lar buraya eklenebilir
})
export default rootReducer
//store'u oluşturduğumuz yer