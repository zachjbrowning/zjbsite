import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
