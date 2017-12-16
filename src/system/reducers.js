import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import carrinhoCompraReducer from '../components/carrinhoCompras/reducers';
const rootReducer = combineReducers(
    {
        form: formReducer,  
        router: routerReducer,
        carrinhoCompras: carrinhoCompraReducer
    }
)

export default rootReducer;