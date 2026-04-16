import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FcLike } from "react-icons/fc";
import Badge from 'react-bootstrap/Badge';
import { FaShopify } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { searchProduct } from '../redux/slices/productSlice';
import { useDispatch } from 'react-redux';


function Header() {

  const dispatch=useDispatch()

  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="/">
          <FaShopify />
          {' '}
          <span style={{ fontWeight: 'bold',color:'white' }}>Fashion Store</span>
        </Navbar.Brand>
        <input style={{ width: '50%', borderRadius: '10px' }} type="text" placeholder='search by product name' className='form-control' onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))}/>
        <div className='d-flex'>
          <FcLike style={{ fontWeight: 'bold', width: '25px', height: '25px' }} />
          <h6>
            <Badge bg="dark" style={{borderRadius:'20px'}}>0</Badge>
          </h6>
           <FaShoppingCart style={{ fontWeight: 'bold', width: '25px', height: '25px',color:'green' }} />
          <h6>
            <Badge bg="dark" style={{borderRadius:'20px'}}>0</Badge>
          </h6>
        </div>

      </Container>
    </Navbar>
  )
}

export default Header