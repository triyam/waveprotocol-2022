import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Payments = () => {
  const [price, setPrice] = useState();
  const [product] = useState({
    name: "Wave Coin",
    price: price,
    description: "Wave Coin Description",
  });
  const makePayment = async (token) => {
    product.price = price;

    if (product.price !== "") {
      console.log(product.price);

      await axios
        .post("http://localhost:5000/payment", {
          token,
          product,
        })
        .then((response) => {
          console.log(response);
          window.alert("Payment Successful!");
          console.log("Payment Successful!");
          // navigate('/userLogin');
        })
        .catch((error) => {
          console.log(error);
          window.alert("Payment Failed ");
          console.log("Payment Failed");
        });
    } else {
      alert("Price Cannot be empty");
    }
  };
  return (
    <>
      <div>
        <input
          required
          type="number"
          id="phone"
          //   value={product.price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={makePayment}
        amount={product.price}
        name="Wave Coin"
        // billingAddress
        // shippingAddress
      >
        <button>Pay</button>
      </StripeCheckout>
    </>
  );
};

export default Payments;
