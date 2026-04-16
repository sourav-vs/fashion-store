import React, { useEffect, useState } from 'react'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from 'react-router-dom';
// import { addToTheWishList } from '../redux/slices/wishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';


function View() {
  const {id}=useParams()
  // console.log(id);
  const [product,setProduct]=useState({})
  // console.log(product);
  const wishlist=useSelector(state=>state.wishList)
  const dispatch=useDispatch()
  
  useEffect(() => {
    if(localStorage.getItem('allproducts')){
      let products=JSON.parse(localStorage.getItem('allproducts'))
      setProduct(products.find(item=>item.id==id))
    }
  }, [])

  const handleAddToWishlist=()=>{
    const existingProduct=wishlist?.find(pro=>pro.id==product.id)
    console.log("Existing:", existingProduct)
    if(existingProduct){
      alert("Product already in your wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  return (
    <>
    <div className='row'>
      <div className="col-lg-6 p-5" style={{textAlign:'center'}}>
        <img src={product.thumbnail} alt="" width={'50%'} />
      </div>
      <div className="col-lg-6 p-5">
        <h3>{product.title}</h3>
        <h4 style={{color:'green'}}>${product.price}</h4>
        <p>{product.description}</p>
       <div className='d-flex justify-content-between'>
          <button onClick={handleAddToWishlist} style={{background:'transparent',border:'none'}}><FaHeartCirclePlus style={{width:'20px',height:'20px',color:'red'}} /></button>
          <button style={{background:'transparent',border:'none'}}><FaCartPlus style={{width:'20px',height:'20px',color:'green'}} /></button>
       </div>
       
      </div>
    </div>
    </>
  )
}

export default View