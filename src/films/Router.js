import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
import { reducer as filmReducer } from './reducer';
import { Router, browserHistory } from 'react-router';

const historyMiddleware = routerMiddleware(browserHistory);

const store = createStore(
    combineReducers({
        films: filmReducer,
        routing: routerReducer
    }),
    compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(historyMiddleware)
    )
);

const history = syncHistoryWithStore(browserHistory, store);

function FilmsRouter() {
    return (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    );
};

export default FilmsRouter;
