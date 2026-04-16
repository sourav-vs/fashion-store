import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { fetchProduct } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import Pagination from '../components/Pagination';


function Home() {
  const { loading, products, error } = useSelector(state => state.product)
  console.log(loading, products, error);

  const [currentPage,setCurrentPage]=useState(1)
  const cardPerPage=6
  let endingIndex=currentPage*cardPerPage
  let startingIndex=endingIndex-cardPerPage
    if(startingIndex>products.length){
    setCurrentPage(1)
  }
  let currentProducts=products?.slice(startingIndex,endingIndex)
  console.log(currentProducts);
  


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  return (
    <>
      {
        loading ?
          <div className='text-center my-5'>
            {/* spinner */}
            <Spinner animation="border" variant="warning" />
          </div>
          :
          <div className='row m-5 p-5'>
            {
              currentProducts?.length>0?
              currentProducts?.map(pro=>(
                <div className='col-lg-4 p-5'>
                  <Card className='mt-2' style={{ width: '18rem', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Img variant="top" src={pro?.thumbnail} />
              <Card.Body>
                <Card.Title>{pro?.title.slice(0,10)}...</Card.Title>
                <Link to={`/view/${pro.id}`}>View More</Link>
              </Card.Body>
            </Card>
                </div>
              ))
              :
              <div className='text-center my-5 text-danger'>
                No Products Found
              </div>
            }
          </div>

          
          }
          <Pagination cardPerPage={cardPerPage} totalProducts={products?.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </>
  )
}

export default Home