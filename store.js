import { applyMiddleware, compose, createStore } from "redux";
import mainReducer from "./src/Component/Services/ProductReducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
 
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))

);

let persistor = persistStore(store)


export default store
export {persistor}
