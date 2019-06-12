import 'react-app-polyfill/ie9'; // For IE 9-11 support
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.scss';

ReactDOM.render(<App />, document.getElementById('app'));