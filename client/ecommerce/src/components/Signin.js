import React from 'react'
import Navlogo from './Navlogo'

const Signin = () => {
  return (
      <>
        <Navlogo />
        <div className="container mt-5" >
            <div className="row">
                <div className=" col-1 col-md-4"></div>
                <div className="col-10 col-md-4 form-check shadow-sm ">
                    <div className='mt-3 mb-3'>
                        <h4>Login</h4>
                        <form>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            
                            <button type="submit" class="btn btn-warning w-100">Sign in</button>
                        </form>
                    </div>
                </div>
                <div className="col-1 col-md-4"></div>
            </div>
        </div>
      </>
  )
}

export default Signin