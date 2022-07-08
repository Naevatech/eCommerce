import React from 'react'
import "./Nav.css"
import Signup from './Signup';
import Navlogo from './Navlogo'



const Nav = () => {
  return (
      <>
        <Navlogo />
        <div className="container mt-2">
            <div className="row">
                <div className="col-12">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/apple/2021/apple-iphone-13_1168x384.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/apple/2022/1168x384_2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/apple/2021/apple-iphone-13-pro_1168x384v2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src="https://ng.jumia.is/cms/0-CMS-MIGRATION-2020/apple/2022/1168x384_1.png" className="d-block w-100" alt="..." />
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-3">
            <div className="row">
                <div className="col-4 col-md-4"></div>
                <div className="col-12 col-md-12">
                    {/* <button className='btn btn-warning w-100 form-control-lg fs-4 '>Signup</button> */}
                    <button type="button" class="btn btn-warning form-control-lg fs-4 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Singup</button>
                    <Signup />
                </div>
                <div className="col-4 col-md-4"></div>
            </div>
        </div>

        <div className="container mt-1">
            <div className="row">
                <div className="col-3 shadow-sm item-check mt-4 ">
                        <i className="uil uil-truck mx-auto fs-3  mb-2"></i>
                        <h6 className='mx-auto'>Free Delivery</h6>
                        <p className='mx-auto'>Free Shipping on all order</p>
                </div>

                <div className="col-3 shadow-sm item-check mt-4 mx-md-1">
                        <i class="uil uil-sync fs-3 mx-auto mb-2"></i>
                        <h6 className='mx-auto'>Return Policy</h6>
                        <p className='mx-auto'>Free Shipping on all order</p>
                </div>

                <div className="col-3 shadow-sm item-check mt-4 mx-md-1 ">
                        <i class="uil uil-headphones mx-auto fs-3 mb-2"></i>
                        <h6 className='mx-auto'>24/7 Support</h6>
                        <p className='mx-auto'>Free Shipping on all order</p>
                </div>

                <div className="col-3 shadow-sm item-check mt-4 mx-md-1">
                        <i class="uil uil-university mx-auto fs-3 mb-2"></i>
                        <h6 className='mx-auto'>Secure Payment</h6>
                        <p className='mx-auto'>Free Shipping on all order</p>
                </div>
            </div>
        </div>
        </>

        
      
  )
}

export default Nav