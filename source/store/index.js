import {createStore,combineReducers,compose} from 'redux';
import rootReducer from './reducers';
import DevTools from './devtools';

export default function configureStore()
{
   const configureStore = compose(DevTools.instrument())(createStore);
   const store =  configureStore(rootReducer);
   return store;
};