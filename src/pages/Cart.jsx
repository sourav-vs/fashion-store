import React from "react";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from "../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);



  const handleDecrement = (id) => {

    const existingProduct = cart.find(pro => pro.id === id)
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        dispatch(decrementQuantity(id))
      }
      else {
        dispatch(removeCartItem(id))
      }
    }
  }

  const handleCheckout = () => {
    alert("Your Order Placed Succesfully.... Thankyou for shoppping with us")
    dispatch(emptyCart())
  }

  return (
    <>
      <div className="row">
        <div className="p-5 col-lg-8">
          <h3>Cart Summary</h3>

          {cart?.length > 0 ? (
            <>
              <Table style={{ background: "transparent" }}>
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
                  {cart.map((pro, index) => (
                    <tr key={pro.id}>
                      <td>{index + 1}</td>
                      <td>{pro?.title}</td>
                      <td>
                        <img
                          src={pro?.thumbnail}

                          width={"35px"}
                          height={"35px"}
                        />
                      </td>
                      <td>
                        <button className="btn" onClick={() => handleDecrement(pro?.id)}>-</button>
                        <input type="text" value={pro?.quantity}
                          readOnly
                          style={{
                            width: "40px",
                            borderRadius: "5px",
                            border: "none",
                            textAlign: "center",
                          }}
                        />
                        <button className="btn" onClick={() => dispatch(incrementQuantity(pro?.id))}>+</button>
                      </td>
                      <td>{pro?.totalPrice}</td>
                      <td>
                        <MdDelete  onClick={() => dispatch(removeCartItem(pro?.id))}
                          style={{ width: "20px", height: "20px", color: "red", cursor: "pointer", }} />


                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <button className="btn btn-danger mx-3" style={{ borderRadius: "10px" }} onClick={() => dispatch(emptyCart())} >
                Empty Cart
              </button>

              <Link to="/">
                <button
                  className="btn btn-primary"
                  style={{ borderRadius: "10px" }}
                >
                  Shop More
                </button>
              </Link>
            </>
          ) : (
            <h4 className="text-danger mt-4">Cart is Empty</h4>
          )}
        </div>

        <div
          className="col-lg-4 d-flex justify-content-center align-items-center flex-column"
          style={{ paddingTop: "50px" }}
        >
          <h4>Total Items :{cart?.length} </h4>
          <h3>Total Amount :{Math?.ceil(cart?.reduce((sum, pro) => sum + pro?.totalPrice, 0))} </h3>
          <button
            className="btn"
            style={{
              padding: "10px 20px",
              background: "black",
              borderRadius: "10px",
              color: "white",
            }} onClick={handleCheckout}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;