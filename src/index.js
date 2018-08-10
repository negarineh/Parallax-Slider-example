import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
    <BrowserRouter>
    <ParallaxProvider>
    <App />
    </ParallaxProvider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
