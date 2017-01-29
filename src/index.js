import './index.css';
import numeral from 'numeral';
import React from 'react';
import ReactDOM from 'react-dom';
import FilmsRouter from './films/Router';

ReactDOM.render(React.createElement(FilmsRouter), document.getElementById('main'));
