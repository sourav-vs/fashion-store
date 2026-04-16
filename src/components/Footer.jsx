import React from 'react'
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='bg-primary p-5'>
        <div className=' row'>
          <div className="col-lg-3">
            <div className='d-flex'>
              <FaShopify style={{ color: 'black' }} />
              <h4 style={{ fontWeight: 'bold' }}>Fashion Store</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus ratione nam, optio ex, quasi cum distinctio voluptas rerum aliquid adipisci veniam quas doloremque autem! Explicabo maiores voluptates quod aut!</p>
            <p>code is licensed by luminar</p>
            <p>currently v5.3.2</p>
          </div>
          <div className="col-lg-3 text-center ">
              <h4 style={{ fontWeight: 'bold' }}>Links</h4>
              <Link to="/" style={{color:'white',textDecoration:'none'}}>Home</Link><br />
              <Link to="/cart" style={{color:'white',textDecoration:'none'}}>Cart</Link><br />
              <Link to="/wishlist" style={{color:'white',textDecoration:'none'}}>WishList</Link>
          </div>
          <div className="col-lg-3 text-center ">
              <h4 style={{ fontWeight: 'bold' }}>Guided</h4>
              <Link style={{color:'white',textDecoration:'none'}}>React</Link><br />
              <Link style={{color:'white',textDecoration:'none'}}>React Bootstrap</Link><br />
              <Link style={{color:'white',textDecoration:'none'}}>React Router Dom</Link>
          </div>
          <div className="col-lg-3 ">
              <h4 style={{ fontWeight: 'bold' }}>Contact US</h4>
              <div className='d-flex'>
                <input type="text" placeholder='enter email' className='form-control w-75' style={{borderRadius:'10px'}} />
                <BsArrowRightSquareFill style={{width:'40px',height:'40px',color:'green',paddingLeft:'5px'}} />
              </div>
              <div className='d-flex m-2'>
                <FaFacebook className='m-2' style={{width:'20px',height:'20px',color:'rgb(255, 204, 0)'}}/>
                <FaTwitter className='m-2'style={{width:'20px',height:'20px',color:'rgb(255, 204, 0)'}}/>
                <FaInstagram className='m-2'style={{width:'20px',height:'20px',color:'rgb(255, 204, 0)'}}/>
                <FaGithub className='m-2'style={{width:'20px',height:'20px',color:'rgb(255, 204, 0)'}}/>
                <FaLinkedin className='m-2'style={{width:'20px',height:'20px',color:'rgb(255, 204, 0)'}}/>
                <FaPhoneAlt className='m-2'style={{width:'20px',height:'20px',color:'rgb(255, 204, 0)'}}/>
              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer