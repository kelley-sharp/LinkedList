import React from 'react';
import ReactDOM from 'react-dom';
import 'notosans-fontface/css/notosans-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*
stretch goals/etc:
- UserCard links are purple; kind of gross
- search from Profile should route to Homepage

*/
