import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { removeWishlist } from '../redux/slices/wishlistSlice';




function Wishlist() {

const wishlist=useSelector(state=>state.wishList)
console.log(wishlist);

const dispatch=useDispatch()

 

  return (
    <>
         <div className='row my-3 mx-2'>

         {  
         wishlist?.length >0 &&
          wishlist?.map(wish =>(

           <div className='col-lg-4 '>
                {/* card */}
                <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={wish?.thumbnail}  />
          <Card.Body>
            <Card.Title className='text-primary fw-bold text-center fs-4'>{wish?.title}</Card.Title>
            <Card.Text>
              <Link to={`/view/${wish.id}`}>View More</Link>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
              <button className='btn fs-3 '>
                <FaHeartCirclePlus onClick={()=>dispatch(removeWishlist(wish?.id))} style={{color:'red'}}/>
                </button>

              <button className='btn fs-3 '>
                <FaCartPlus style={{color:'green'}}/>
                </button>
            </div>
          </Card.Body>
    
        </Card>
           </div>
          ))
          
        }
        </div>
    </>
  )
}

export default Wishlist