import "./styles/app.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'


window.jQuery = window.$ = require('jquery');
require('bootstrap-sass');

ReactDOM.render((<Provider store={store}><App url={ window.location.pathname } /></Provider>), document.getElementById('root'));
registerServiceWorker();