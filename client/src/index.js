import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store= createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    // <Provider store={store}>
    <Provider store={createStoreWithMiddleware(reducers)} >
        <Router>
            <App />
        </Router>
    </Provider>,

    document.getElementById('root')
);
