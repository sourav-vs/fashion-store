import React from 'react'
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


function Cart() {
  return (
    <>
      <div className='row'>
        <div className=' p-5 col-lg-8'>
          <h3>Cart Summary</h3>
          <Table style={{ background: 'transparent' }} >
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mascara</td>
                <td>
                  <img src="mascara.png" alt="" width={'35px'} height={'35px'} />
                </td>
                <td>
                  <button className='btn'>-</button>
                  <input type="text" placeholder='1' style={{ width: '20px', borderRadius: '5px', border: 'none', textAlign: 'center' }} />
                  <button className='btn'>+</button>
                </td>
                <td>99.9</td>
                <td><MdDelete style={{ width: '20px', height: '20px', color: 'red' }} /></td>
              </tr>
            </tbody>
          </Table>
          <button className='btn btn-danger mx-3' style={{ borderRadius: '10px' }}>Empty Cart</button>
          <Link to={'/'}><button className='btn btn-primary' style={{ borderRadius: '10px' }}>Shop More</button></Link>
        </div>
        <div className='col-lg-4 d-flex justify-items-center align-items-center flex-column' style={{ paddingTop: '50px' }}>
          <h4>Total Items :0</h4>
          <h3>Total Amount :00</h3>
          <button className='btn ' style={{ padding: '10px 20px', background: 'black', borderRadius: '10px' }}>Check Out</button>
        </div>
      </div>
    </>
  )
}

export default Cart