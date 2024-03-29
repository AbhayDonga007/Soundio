import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "primereact/button";
import { makePaymentRequest } from "../../utils/api";

import "./Cart.scss";

const Cart = () => {
  const { cartItems, setShowCart, cartSubTotal } = useContext(Context);

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Your Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
          </span>
        </div>

        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>Your cart is feeling lonely</span>
            <Button className="return-cta" label="Start Shopping" />
          </div>
        )}

        {!!cartItems.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <div className="row">
                  <span className="text w">Cart Total:</span>
                  <span className="text total w">&#8377; {cartSubTotal}</span>
                </div>
                <div className="row">
                  <span className="text w">Shipping : </span>
                  <span className="text total w">Free</span>
                </div>
                <div className="row">
                  <span className="text">To Pay : </span>
                  <span className="text total">&#8377; {cartSubTotal}</span>
                </div>
              </div>
              <div className="button">
                <Button
                  className="checkout-cta"
                  label="Make Payment"
                  onClick={handlePayment}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
