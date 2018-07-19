import React from 'react';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import CarListingPage from "./pages/CarListingPage/CarListingPage";  // Css-module styles

const App = () => (
  <div className='App'>
    <Header/>
    <CarListingPage/>
    <Footer/>
  </div>
);

export default App;
