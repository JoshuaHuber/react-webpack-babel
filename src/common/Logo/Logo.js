import "../../../styles/base/common/logo.sass"

import React from 'react'
import classNames 

const Logo = (className) => {
    return (
      <img
      className={classNames('logo', className)}
      src={'https://cdn-prod.prod.fair.engineering/web/images/logos/FAIR_LOGO_2X.png'}
    >
    </img>
  )
}
export default Logo;
