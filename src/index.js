import React from 'react';
import ReactDom from 'react-dom';
import './css/general.css';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'



ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
