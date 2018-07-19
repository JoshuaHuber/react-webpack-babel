import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";  // Css-module styles

const App = () => (
  <div className='App'>
    <Header/>
    
    <Footer/>
  </div>
);

export default App;
