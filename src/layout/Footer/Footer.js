import 'styles/base/layout/footer.sass';

import React from 'react'
import Logo from "../../common/Logo/Logo";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer" >
        <Logo />
      </div>
    )
  }
}
