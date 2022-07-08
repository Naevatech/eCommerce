import React from 'react'
import zenith from '../zenith.png';

const Navlogo = () => {
  return (
    <>
      <div className="container-fluid shadow-sm">
            <div className="row">
                {/* <div classNameName="col-1"></div> */}
                <div className="col-4 col-md-5"></div>
                <div className="col-4 col-md-2 justify-content-center"><img src={zenith} className="zenith-logo " alt="logo" /></div>
                <div className="col-4 col-md-5"></div>
            </div>
        </div>
    </>
  )
}

export default Navlogo