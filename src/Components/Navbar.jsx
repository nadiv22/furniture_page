import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
import { FaTruck } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
  <div className="container-fluid navbar-color ">
    <a className="navbar-brand fs-2 text-white" href="#">furni.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active  text-white" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" href="#"><RiAdminFill/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" href="#"><FaShoppingCart/></a>
        </li>
     </ul>
     </div>
  </div>
</nav>
    <div className='modern d-flex position-relative'>
        <div className='modern-right position-absolute top-25 end-50 bottom-50 '>
              <h1 className='text-white'>Modern Interior</h1>
              <h1 className='text-white'>Design Studio</h1>
              <p className='text-white'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet<br></br> 
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <button className=' btn btn-space rounded-pill m-1 btn1'>Shop Now</button>
              <button className=' btn btn-space rounded-pill btn2'>Explore</button>
              </div>
              <div className='modern-left position-relative start-50'>
                <img src='couch (1).png' alt=''></img>
              </div>
    </div>
              <div className='crafted d-flex'>
                  <div className='crafted-left ps-5 pt-5'>
                       <h1>Crafted With</h1>
                       <h1>excellent</h1>
                       <h1>material</h1>
                       <p>Donec vitae odio quis nisl dapibus<br></br>
                         malesuada. Nullam ac aliquet velit.<br></br>
                          Aliquam vulputate velit imperdiet dolor<br></br>
                           tempor tristique.</p>
                           <button className='btn btn-space rounded-pill btn-dark'>Explore</button>
                  </div>
                 <div className='crafted-right d-flex'>
                        <div className='product-1'>
                            <img src='product-1.png' alt='' className=' pt-5 ps-5 product-size'></img>
                            <h5 className='pt-5 ps-5'>Nordic Chair</h5>
                            <h5 className='ps-5'>$50.00</h5>
                        </div>
                        <div className='product-2'>
                            <img src='product-2.png' alt='' className=' pt-5 product-size' ></img>
                            <h5 className='ps-5'>Kruzo Aero Chair</h5>
                            <h5 className='ps-5'>$78.00</h5>
                        </div>
                        <div className='product-3'>
                            <img src='product-3.png' alt='' className='pt-5 product-size'></img>
                            <h5 className='ps-5'>Ergonomic Chair</h5>
                            <h5 className='ps-5'>$43.00</h5>
                        </div>
                 </div>
              </div>

    <div className='choose  '>
        <div className='why-choose  pt-5 ps-5 '>
            <h2>Why Choose Us</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                 Aliquam<br></br> vulputate velit imperdiet dolor tempor tristique.</p>
                 </div>
                 <div className='truck ps-5'>
                   <a href=''><FaTruck/></a>
                   <h5>Fast & Free Shipping</h5>
                   <p>Donec vitae odio quis nisl dapibus<br></br>
                     malesuada. Nullam ac aliquet velit.<br></br>
                      Aliquam vulputate.</p>
                 </div>
               <div className='support ps-5'>
                <a href=''><MdOutlineSupport/></a>
                <h5>24/7 Support</h5>
                <p>Donec vitae odio quis nisl dapibus<br></br>
                     malesuada. Nullam ac aliquet velit.<br></br>
                      Aliquam vulputate.    </p>
                       </div>

            <div className='easy'>
                <a href=''><FaShopify/></a>
                <h5>Easy to Shop</h5>
                <p>Donec vitae odio quis nisl dapibus<br></br>
                     malesuada. Nullam ac aliquet velit.<br></br>
                      Aliquam vulputate.</p>
                
            </div>
                 <div className='free'>
                    <a href=''><GiReturnArrow/></a>
                    <h5>Hassle Free Returns</h5>
                    <p>Donec vitae odio quis nisl dapibus<br></br>
                         malesuada. Nullam ac aliquet velit.<br></br>
                         Aliquam vulputate.</p>
                 </div>
                  </div>
             <div className='choose-img'>
                <img src='choose.jpg' alt='' className='w-25'></img>
             </div>


         <div className='three-images d-flex'>
            <div className='images-1'>
                <img src='grid-1.jpg' alt></img>
            </div>
            <div className='images-2'>
                 <img src='grid-2.jpg' alt=''></img>
            </div>
            <div className='image-3'>
                <img src='grid-3.jpg'></img>
            </div>
            
          <div className='three-images-right'>
            <h2 className='we'>We Help you Make Modern</h2>
            <h2>Interior Design</h2>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae<br></br>
                 odio quis nisl dapibus malesuada. Nullam ac aliquet velit.<br></br>
                  Aliquam vulputate velit imperdiet dolor tempor tristique.<br></br>
                   Pellentesque habitant morbi tristique senectus et netus et<br></br>
                    malesuada</p>
                    <ul>
                        <li><p>Donec vitae odio quis<br></br>
                         nisl dapibus malesuada</p></li>
                         <li><p>Donec vitae odio quis<br></br>
                             nisl dapibus malesuada</p></li>
                        <li className='P-30'><p>Donec vitae odio quis<br></br>
                         nisl dapibus malesuada</p></li>
                         <li className='P-40'><p>Donec vitae odio quis<br></br> 
                         nisl dapibus malesuada</p></li>
                    </ul>
                    <button className='explore'>Explore</button>
          </div>

         </div>
          
    <div className='chair-images'> 
        <div className='chair-1 '>
            <img src='product-1.png' alt='' className='w-25 c-1'></img>
            <h3 className='h-1'>Nordic Chair</h3>
            <p className='h-1'>Donec facilisis quam ut purus<br></br>
             rutrum lobortis. Donec vitae odio</p>
             <h3 className='h-1'>Read More</h3>
        </div>
        <div className='chair-2 '>
        <img src='product-2.png' alt='' className='w-25 c-2'></img>
            <h3 className='c-2'>Kruzo Aero Chair</h3>
            <p className='c-2'>Donec facilisis quam ut purus<br></br>
             rutrum lobortis. Donec vitae odio</p>
             <h3 className='c-2 '>Read More</h3>
        </div>
        <div className='chair-3 '>
        <img src='product-3.png' alt='' className='w-25 c-3'></img>
            <h3 className='c-3'>Ergonomic Chair</h3>
            <p className='c-3'>Donec facilisis quam ut purus<br></br>
             rutrum lobortis. Donec vitae odio</p>
             <h3 className='c-3'>Read More</h3>
        </div>
    </div>



    </div>
  )
}

export default Navbar
