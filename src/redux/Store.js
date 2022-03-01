import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Reducer from './/Reducer';
import HttpReducer from './/HttpReducers';

const initialState = {};
const middleware = [thunk];
const rootReducer = combineReducers(
  {
    hp_reducer: Reducer, 
    http_reducer: HttpReducer,
    form: formReducer
  }
  );

const Store = () => {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware)));
}

export default Store;
