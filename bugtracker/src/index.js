import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bulma/css/bulma.css'
// import './main.js'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
