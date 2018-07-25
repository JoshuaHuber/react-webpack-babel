import React, {Component} from 'react';
import 'styles/base/layout/header.sass';
import {Link} from "react-router-dom";
import Logo from "../../common/Logo/Logo";

class Header extends Component {
  render(){
    return(
      <div className='header'>
        <Logo/>
        <div className='nav-container'>
            <span><Link to="/">Home</Link></span>
            <span><a href='https://joshuahuber.com/' rel='noopener noreferrer' target='_blank'>About</a></span>
        </div>
      </div>
    )
  }
}
export default Header;
