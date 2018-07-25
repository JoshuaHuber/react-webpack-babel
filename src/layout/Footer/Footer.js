import 'styles/base/layout/footer.sass';

import React, {Component} from 'react'
import Logo from "../../common/Logo/Logo";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <Logo />
      </div>
    )
  }
}
