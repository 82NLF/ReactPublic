import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import './assets/css/index.css';
import Router from './routes';
import createStore from './redux/createStore';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();
const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}/>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
