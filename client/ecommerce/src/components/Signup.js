import React from 'react'

const Signup = () => {
  return (
      <>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLabel">Register</h6>
                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div class="modal-body">

                <form>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control " id="floatingInput" placeholder="Fullname" />
                        <label for="floatingInput">Full name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Phone No." />
                        <label for="floatingPassword">Phone No.</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    
                    <button type="submit" class="btn btn-warning w-100">Sign up</button>
                </form>

            </div>
            
            </div>
        </div>
        </div>
      </>
  )
}

export default Signup