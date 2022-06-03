import axios from "axios";
import { Button } from "bootstrap";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const Card = () => {
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
      <div className="alert alert-info mt-3">
          <h3>
              
      Buy Through Credit/Debit<br />
          </h3>
    </div>
    <h4>
    You can pay through Credit/Debit to complete your payment. The token balance will appear in your account after successful payment
    </h4>
    <h6>
    Amount To be paid
    </h6>
    
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
        <button type="button" className="btn btn-primary btn-block">Pay</button>
      </StripeCheckout>
      <h6>
    You get (WPFM)
    </h6>
    <input
          required
          type="number"
          id="phone"
          //   value={product.price}
          onChange={(e) => setPrice(e.target.value)}
        />
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={makePayment}
        amount={product.price}
        name="Wave Coin"
        // billingAddress
        // shippingAddress
      >
        <button type="button" className="btn btn-primary btn-block">Pay</button>
      </StripeCheckout>
      <br/>
      <button type="button" className="btn btn-primary btn-sm btn-block">Submit</button>
      <button type="button" class="block">Block Button</button>
    </>
  );
};

export default Card;
