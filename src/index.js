import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import Router from './router'
import './index.css';

//Redux && Reducers && History
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from './system/reducers'

const history = createHistory();
const middleware = routerMiddleware(history);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise,middleware)(createStore)(reducers, devTools)

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history} />    
        </MuiThemeProvider>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

