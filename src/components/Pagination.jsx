import React from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

function Pagination({cardPerPage,totalProducts,setCurrentPage,currentPage}) {
    let pages=[]
    for(let i=1;i<=Math.ceil((totalProducts/cardPerPage));i++){
        pages.push(i)
    }

  return (
    <>
    <div className='m-5 text-center' >

        <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1} style={{background:'transparent',borderRadius:'10px'}} className='btn btn-light border m-3'><FaAnglesLeft /></button>
        {
            pages.map(page=>(
                <button onClick={()=>setCurrentPage(page)} style={{background:'transparent',borderRadius:'10px'}} className={`btn mx-1 ${currentPage==page?'bg-danger text-light':''}`}>{page}</button>
            ))
        }
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==pages?.length} style={{background:'transparent',borderRadius:'10px'}} className='btn btn-light border m-3'><FaAnglesRight /></button>

    </div>
    </>
  )
}

export default Pagination