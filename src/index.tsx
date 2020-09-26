import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import * as serviceWorker from './service-worker';

import './index.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: (_: ServiceWorkerRegistration) => { },
  onSuccess: (_: ServiceWorkerRegistration) => { },
});
