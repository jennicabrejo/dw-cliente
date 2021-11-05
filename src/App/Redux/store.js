import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import reducerLogin from "./reducers/login.reducer";
import reducerCatedraticos from "./reducers/catedraticos.reducer";
import reducerCursos from "./reducers/cursos.reducer";
import reducerEstudiantes from "./reducers/estudiantes.reducer";
import reducerNotas from "./reducers/notas.reducer";
// import {composeWithDevTools} from "redux-devtools-extension";
import * as reduxModule from 'redux';
import thunk from 'redux-thunk';

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            serialize: true
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const reducers = combineReducers({
    reducerLogin,
    reducerCatedraticos,
    reducerCursos,
    reducerEstudiantes,
    reducerNotas
});

const store = createStore(reducers, enhancer);


export default store;