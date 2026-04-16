import React from "react";
import Card from "react-bootstrap/Card";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

function WishList() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  const handleaddtocart = (singleProduct) => {
  const existingProduct = cart.find(pro => pro.id == singleProduct.id)

  if (existingProduct) {
    dispatch(addToCart(singleProduct))
    alert("product quantity incremented")
  } else {
    dispatch(addToCart(singleProduct))
  }

  dispatch(removeWishlist(singleProduct.id))
}


  return (
    <div className="m-5 p-5">
      <h3 className="text-center mb-4">WishList</h3>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {wishlist?.length > 0 ? (
          wishlist?.map((pro) => (
            <Card key={pro.id} style={{ width: "18rem", borderRadius: "10px", textAlign: "center" }}>
              <Card.Img variant="top" src={pro.thumbnail} style={{ height: "220px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{pro.title.slice(0, 15)}...</Card.Title>
                <div className="d-flex justify-content-center gap-3">
                  <button style={{ background: "transparent", border: "none" }}>
                    <FaHeartCircleXmark onClick={() => dispatch(removeWishlist(pro.id))} style={{ width: "20px", height: "20px", color: "red" }} />
                  </button>
                  <button style={{ background: "transparent", border: "none" }}>
                     <FaCartPlus
                      onClick={() => handleaddtocart(pro)}
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "green",
                        cursor: "pointer",
                      }}
                    />
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="text-center my-5 text-danger">No Products in Wishlist</div>
        )}
      </div>



    </div>
  );
}

export default WishList;